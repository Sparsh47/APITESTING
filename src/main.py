from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from print import quiz_file

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # Replace with the actual origin of your React app
    allow_origins=["http://localhost:3002"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


@app.get("/quessionaire-api/{name}")
def root_data(name: str):
    return quiz_file(name)
