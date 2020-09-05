import requests
import json
post = requests.get('https://jsonplaceholder.typicode.com/posts').json()
user = requests.get('https://jsonplaceholder.typicode.com/users').json()



for p in post:
    p['user'] = [u for u in user if u['id'] == p['userId']] #assign user dengan data ==> user, id dari post(userId)
    dumps = json.dumps(p, indent=6)
    print(dumps)