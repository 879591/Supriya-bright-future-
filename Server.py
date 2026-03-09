from flask import Flask,request,jsonify

app = Flask(__name__)

@app.route("/ask",methods=["POST"])
def ask():

    data = request.json
    question = data["question"]

    answer = "AI answer for: " + question

    return jsonify({"answer":answer})

app.run()
