import email
from unicodedata import name
from mongoengine import Document, StringField, IntField, ListField



class User(Document):
    
    first_name = StringField()
    last_name = StringField()
    email = StringField()
    mobileNo = StringField()
    dateOfBirth = StringField()
    country = StringField()
    state = StringField()
    city = StringField()
    password = StringField()
    occupation = StringField()
    income = StringField()
    experience = StringField()
    account = StringField()
    
