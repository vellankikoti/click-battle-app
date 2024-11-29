from flask import Flask, jsonify

app = Flask(__name__)

# A simple endpoint for recording clicks
@app.route('/api/click', methods=['POST'])
def handle_click():
    return jsonify({"message": "Click recorded!"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
