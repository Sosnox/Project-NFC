from fastapi import FastAPI, HTTPException
import mysql.connector

app = FastAPI()

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
        raise HTTPException(status_code=500, detail=f"Error connecting to MySQL database: {e}")

def insert_data(name_report: str, contact: str, detail_report: str, rating: int, checktypes: str):
    connection = connect_to_mysql()
    cursor = connection.cursor()
    try:
        query = "INSERT INTO Report (name_report, contact, detail_report, rating, checktypes) VALUES (%s, %s, %s, %s, %s)"
        data = (name_report, contact, detail_report, rating, checktypes)
        cursor.execute(query, data)
        connection.commit()
        return {"message": "Data inserted successfully"}
    except mysql.connector.Error as e:
        raise HTTPException(status_code=500, detail=f"Error inserting data into MySQL database: {e}")
    finally:
        cursor.close()
        connection.close()

@app.post("/Feedback/")
async def insert_feedback(name_report: str, contact: str, detail_report: str, rating: int, checktypes: str):
    return insert_data(name_report, contact, detail_report, rating, checktypes)
