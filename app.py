from flask import Flask,render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('home.html')

# call from ajax 
@app.route("/result",methods=['GET'])
def result():
    count = 0
    text = request.args.get('text');
    set_text = set(text)
    for i in set_text:
        if(i.lower() in ['a','e','i','o','u']):
            count+=1
    return str(count)

if __name__ == ('__main__'):
    app.run(debug=True)