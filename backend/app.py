from flask import Flask, jsonify, request

app = Flask(__name__)

team_a_score = 0
team_b_score = 0

@app.route("/score", methods=["GET"])
def get_scores():
    return jsonify({"team_a": team_a_score, "team_b": team_b_score})

@app.route("/increment/<team>", methods=["POST"])
def increment_score(team):
    global team_a_score, team_b_score

    if team == "team_a":
        team_a_score += 1
    elif team == "team_b":
        team_b_score += 1
    else:
        return jsonify({"error": "Invalid team"}), 400

    return jsonify({"message": f"{team} score incremented!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
