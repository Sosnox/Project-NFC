from fastapi import FastAPI
import mysql.connector

app = FastAPI()

def test_connection():
    try:
        # Establish MySQL connection
        connection = mysql.connector.connect(
            host="localhost",
            user="xenon",
            password="xenon",
            database="db-nfc-game"
        )
        # If connection is successful, return a success message
        return "Connection to MySQL database successful"
    except mysql.connector.Error as e:
        # If an error occurs, return the error message
        return f"Error connecting to MySQL database: {e}"

@app.get("/test-connection/")
async def check_connection():
    # Call the test_connection function to test the connection
    return test_connection()
