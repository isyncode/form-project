from fastapi import FastAPI, Request, Form, UploadFile, File
from typing import Annotated
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

import requests

app = FastAPI()
app.mount("/static", StaticFiles(directory="./"), name="static")
templates = Jinja2Templates(directory="./")

@app.get("/", response_class=HTMLResponse)
async def main(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/login", response_class=JSONResponse)
async def login(email: str = Form(), password: str = Form()):
    print(email)
    print(password)
    return {"Login": True}