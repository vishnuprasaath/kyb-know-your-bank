from fastapi import FastAPI

app = FastAPI()

banks = [
    {"name":"State Bank of India","fd_rate":6.5},
    {"name":"HDFC Bank","fd_rate":7.1},
    {"name":"ICICI Bank","fd_rate":6.9}
]

@app.get("/")
def home():
    return {"message":"KYB Backend Running"}

@app.get("/banks")
def get_banks():
    return banks