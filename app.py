import sqlite3
from flask import Flask, jsonify

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect("creme_patisserie.db")
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "OK",
        "database": "Connected",
        "project": "Crème & Co. Pâtisserie"
    }), 200

if __name__ == "__main__":
    init_db()
    app.run(debug=True, port=5000)
