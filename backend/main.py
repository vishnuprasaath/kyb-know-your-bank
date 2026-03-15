from fastapi import FastAPI
from bank_data import banks

app = FastAPI()

@app.get("/")
def home():
    return {"message":"KYB API running"}

@app.get("/banks")
def get_banks():
    return banks
