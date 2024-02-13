from fastapi import FastAPI, HTTPException, Request
import mysql.connector
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # อนุญาตให้ทุก origins เข้าถึง
    allow_credentials=True,  # อนุญาตให้ใช้ credentials
    allow_methods=["*"],  # อนุญาตให้ใช้ทุก HTTP methods
    allow_headers=["*"],  # อนุญาตให้ใช้ทุก headers
)
class FeedbackData(BaseModel):
    name_report: str
    contact: str
    detail_report: str
    rating: int
    checktypes: str

def connect_to_mysql():
    try:
        connection = mysql.connector.connect(
            host="mysqldb",
            user="xenon",
            password="xenon",
            database="db-nfc-game"
        )
        return connection
    except mysql.connector.Error as e:
        raise HTTPException(
            status_code=500, detail=f"Error connecting to MySQL database: {e}"
        )


def insert_data(
    name_report: str, contact: str, detail_report: str, rating: int, checktypes: str
):
    connection = connect_to_mysql()
    cursor = connection.cursor()
    try:
        query = "INSERT INTO Report (name_report, contact, detail_report, rating, checktypes) VALUES (%s, %s, %s, %s, %s)"
        data = (name_report, contact, detail_report, rating, checktypes)
        cursor.execute(query, data)
        connection.commit()
        return {"message": "Data inserted successfully"}
    except mysql.connector.Error as e:
        raise HTTPException(
            status_code=500, detail=f"Error inserting data into MySQL database: {e}"
        )
    finally:
        cursor.close()
        connection.close()

def get_report_data():
    connection = connect_to_mysql()
    cursor = connection.cursor(dictionary=True)
    try:
        query = "SELECT * FROM Report"
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except mysql.connector.Error as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching data from MySQL database: {e}"
        )
    finally:
        cursor.close()
        connection.close()

# Set Path send data
@app.get("/get_all_feedback/")
async def get_report():
    try:
        report_data = get_report_data()
        return report_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing request: {e}")

@app.get("/get_feedback_by_id/")
async def get_report(id: str):
    try:
        report_data = get_report_data()
        return report_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing request: {e}")


@app.post("/post_feedback/")
async def insert_feedback(feedback_data: FeedbackData):
    print(feedback_data)
    try:
        name_report = feedback_data.name_report
        contact = feedback_data.contact
        detail_report = feedback_data.detail_report
        rating = feedback_data.rating
        checktypes = feedback_data.checktypes

        return insert_data(name_report, contact, detail_report, rating, checktypes)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing request: {e}")
