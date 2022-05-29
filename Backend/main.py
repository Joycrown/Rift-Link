from fastapi import HTTPException, status
from fastapi import Depends, FastAPI
from models import User
import json
from mongoengine import *
from pydantic import BaseModel
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from datetime import timedelta, datetime
from jose import JWTError, jwt
from fastapi.middleware.cors import CORSMiddleware
import os
import uuid
from pathlib import Path
from cryptography.hazmat.backends.openssl.rsa import (
    _RSAPrivateKey,
    _RSAPublicKey,
)
from cryptography.x509 import load_pem_x509_certificate
from cryptography.hazmat.primitives import serialization
from dotenv import load_dotenv


load_dotenv()




oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


app =FastAPI()
connect(db = "RiftLink", host="localhost", port=27017)



origins = ['https://localhost:3000']


app.add_middleware(
    CORSMiddleware,
    allow_origins =origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers = ["*"],
)




@app.get("/get_all_users")
def get_all_users():
    users = json.loads(User.objects().to_json())
    # users_list = json.loads(users)
    return {"user":users}
    # print(users)
    
    
class NewUser(BaseModel):
   
    first_name : str
    last_name : str
    email : str
    mobileNo : str
    dateOfBirth : str
    country   : str
    state : str
    city : str
    password : str
    occupation : str
    income : str
    experience : str
    account : str
    
class User2(BaseModel):
    first_name : str
    last_name : str
    email : str
    occupation : str
    experience : str

class UserInDB(User2):
    hashed_password: str
    
class Userr(User2):
    id: int
    
class TokenData(BaseModel):
    email: str | None = None

class forgotPassword(BaseModel):
    email: str

   
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password):
    return pwd_context.hash(password)
    
@app.post("/add_user")
def add_user(user:NewUser):
    new_user = User(
                    first_name= user.first_name,
                    last_name= user.last_name,
                    email= user.email,
                    mobileNo= user.mobileNo,
                    dateOfBirth= user.dateOfBirth,
                    country= user.country,
                    state= user.state,
                    city= user.city,
                    password=get_password_hash(user.password),
                    occupation= user.occupation,
                    income= user.income,
                    experience=user.experience,
                    account= user.account)
    
    user = json.loads(User.objects(email=user.email).to_json())
    if user :
        return HTTPException(status_code=status.HTTP_409_CONFLICT,
                            detail= 'email already in use')
    else:
        new_user.save()
        return {"message":"User added Successfully"}
    
    
def get_user(email: str):
    user = User.objects.get(email=email)
    if user:
       user_dict = {
                    
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "email": user.email,
                    "occupation": user.occupation,
                    "experience": user.experience,
       }
       return user_dict
    
def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
    except JWTError:
        raise credentials_exception
    user = get_user(email=token_data.email)
    if user is None:
        raise credentials_exception
    return user    
    
def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user:
        return current_user
    raise HTTPException(status_code=400, detail="Inactive user")

    
def authenticate_user(email,password):
    try:
        user = json.loads(User.objects.get(email=email).to_json())
        password_check = pwd_context.verify(password,user['password'])
        return password_check
    except User.DoesNotExist:
        return False
   
SECRET_KEY=os.getenv('SECRET_KEY')
ALGORITHM = os.getenv('ALGORITHM')
def create_access_token(data:dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp":expire})
    
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def generate_token():
    now = datetime.utcnow()  
    payload ={
        'iat': now,
        'exp': (now + timedelta(hours=24))
    } 
    # SECRET_KEY1 = str(uuid.uuid1()),
    return jwt.encode(payload,  SECRET_KEY, algorithm=ALGORITHM)

def validate_token(token):
    unverified_headers = jwt.get_unverified_header(token)
    x509_certificate = load_pem_x509_certificate(
        Path('public_key.pem').read_text().encode()
    ).public_key()
    return jwt.decode(
        token,
        key=x509_certificate,
        algorithms=unverified_headers['alg'],
    )

@app.post("/token")
def login (form_data:OAuth2PasswordRequestForm = Depends()):
    email = form_data.username
    password = form_data.password
    
    user =authenticate_user(email, password)
    
    if not user:
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "Incorrect email or password")
        
    access_token = create_access_token(
       data={"sub": email}, expires_delta=timedelta(minutes=3)
    )
    return{"access_token": access_token, "token_type": "bearer"}




@app.get("/users/me/", response_model=User2)
def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user

@app.post('/forget-password')
def forgot_password(request: forgotPassword):
    try:
        user = json.loads(User.objects.get(email=request.email).to_json())
        if user:
            reset_code = generate_token()
            return reset_code
    except User.DoesNotExist:
       raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "Incorrect email")
   



  
@app.get("/")
def home(token:str = Depends (oauth2_scheme)):
    return{"token":token}
