
from xml.dom.minidom import Document
from database import collection 
from fastapi import HTTPException, status
from fastapi import Depends, FastAPI
from models import User
import json
from mongoengine import *
from pydantic import BaseModel
from passlib.context import CryptContext
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from datetime import timedelta, datetime
from jose import jwt
from fastapi.middleware.cors import CORSMiddleware
import os
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
       

@app.post("/token")
def login (form_data:OAuth2PasswordRequestForm = Depends()):
    email = form_data.username
    password = form_data.password
    
    if authenticate_user(email, password):
        access_token = create_access_token(
            data ={"sub":email}, expires_delta=timedelta(minutes=30)
        )
        return{"access_token": access_token, "token_type": "bearer"}
    else:
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = "Incorrect email or password")


# @app.get('/get_user/{id}')
# def get_user(id):
#     user= User.objects.get(id=id)
    
    
#     user_dict= {
#                  "id":user.id,
#                  "first_name":user.first_name
#     }
#     return user_dict

# def get_current_user(toke:str =Depends()):
#     try:
#         payload = create_access_token
#         user= User.object.get(payload['id'])
#     except:
#         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password")
#     return user


# @app.get('/user/me')
# def get_user(user:User=Depends(get_current_user)):
#     return user


  
@app.get("/")
def home(token:str = Depends (oauth2_scheme)):
    return{"token":token}

