from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
import datetime
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'ff14121302'
app.config['MYSQL_DB'] = 'wx'

# 创建数据库连接
conn = pymysql.connect(
    host=app.config['MYSQL_HOST'],
    user=app.config['MYSQL_USER'],
    password=app.config['MYSQL_PASSWORD'],
    database=app.config['MYSQL_DB']
)
app.config['PROPAGATE_EXCEPTIONS'] = True
CORS(app)
cursor = conn.cursor()
# app.debug = True



@app.route('/save', methods=['POST'])
def save_memory():
    try:
        data = request.json
        progress = data['progress']
        result = data['result']

        id = datetime.datetime.now()
        print(id,progress,result)
        data = (id, progress, result)
        insert = "INSERT INTO wx (id, progress, result) VALUES (%s, %s, %s)"
        cursor = conn.cursor()
        cursor.execute(insert, data)

        cursor.execute("SELECT COUNT(*) FROM wx")
        record_count = cursor.fetchone()[0]

        if record_count > 10:
            delete_old_records = "DELETE FROM wx ORDER BY id LIMIT %s"
            cursor.execute(delete_old_records, (record_count - 10,))

        conn.commit()

        response_message = "ok"
        return jsonify({"message": response_message})

    except Exception as e:
        error_message = str(e)
        return jsonify({"error": error_message}), 500


@app.route('/sel', methods=['GET'])
def sel_calculation_data():
    try:
        insert ="SELECT progress, result FROM wx ORDER BY id DESC LIMIT 10"
        cursor = conn.cursor()
        cursor.execute(insert)
        data = cursor.fetchall()
        return jsonify({"data": data})

    except Exception as e:
        error_message = str(e)
        return jsonify({"error": error_message}), 500


@app.route('/del', methods=['DELETE'])
def del_caculation_data():
    try:

        insert = "DELETE FROM `wx`"
        cursor = conn.cursor()
        cursor.execute(insert)
        conn.commit()
        response_message = "ok"
        return jsonify({"message": response_message})

    except Exception as e:
        error_message = str(e)
        return jsonify({"error": error_message}), 500


if __name__ == '__main__':
    app.run(host='localhost', port=5000)
