from flask import Flask, jsonify

app = Flask(__name__)

team_a_score = 0
team_b_score = 0

@app.route("/api/click/<team>", methods=["POST"])
def handle_click(team):
    global team_a_score, team_b_score
    if team == "team_a":
        team_a_score += 1
    elif team == "team_b":
        team_b_score += 1
    else:
        return jsonify({"error": "Invalid team"}), 400
    
    return jsonify({"message": f"{team} score incremented!"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
