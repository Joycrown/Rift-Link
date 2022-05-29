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
from dotenv import load_dotenv


load_dotenv()




oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


app =FastAPI()
connect(db = "RiftLink", host="localhost", port=27017)



origins = ['https://localhost:3000']

   
SECRET_KEY=os.getenv('SECRET_KEY')
ALGORITHM = os.getenv('ALGORITHM')
ACCESS_TOKEN_EXPIRE_MINUTES = 30


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
    
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class User2(BaseModel):
    first_name : str
    last_name : str
    email : str
    mobileNo : str
    dateOfBirth : str
    country   : str
    state : str
    city : str
    occupation : str
    income : str
    experience : str
    account : str

class UserInDB(User):
    hashed_password: str
   
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password):
    return pwd_context.hash(password)



def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def get_user(email: str):
    db= json.loads(User.objects.get(email=email).to_json())
    if db:
        user_dict = db
        return User(**user_dict)


def authenticate_user(email: str, password: str):
    user = get_user(email)
    if not user:
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: str = Depends(oauth2_scheme)):
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


async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user


@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/users/me/", response_model=User2)
async def read_users_me(current_user: User2 = Depends(get_current_active_user)):
    return current_user


@app.get("/users/me/items/")
async def read_own_items(current_user: User2 = Depends(get_current_active_user)):
    return [{"item_id": "Foo", "owner": current_user.username}]
