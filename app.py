from flask import Flask, request, jsonify

import spacy

app = Flask(__name__)
NLP = spacy.load('en')


@app.route('/ner', methods=['POST'])
def ner():
    data = request.form.get('text')
    entities = []
    print(data)
    if data:
        for ent in NLP(data).ents:
            entities.append({
                'text': ent.text,
                'label': ent.label_,
                'start': ent.start_char,
                'stop': ent.end_char
            })
    response = jsonify(entities)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
