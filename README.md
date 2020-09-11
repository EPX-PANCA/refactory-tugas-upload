## Shell Script

### TASK

## Create script to calculate text length 
input
```
bash textlenght.sh helloworld
```

output
```
text lenght is 10
````

## Create script that accept url then validate it if valid get data from it and show the data 

Input: 
```bash
bash url.sh https://jsonplaceholder.typicode.com/users/1
```
Output: 
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

```



## Read data from file and save it 
- create file called urls.txt
inside url txt add these line 
```txt
https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/comments
https://jsonplaceholder.typicode.com/todos
```
- read data from `urls.txt` and get json data from that url then save data to filename match end of url pattern 

input 
```bash
bash urls.sh urls.txt
```

output:
```
user.json created 
posts.json created
```

## Script to install nodejs 

- create shell script to install nodejs with spesific version 

input
```bash
bash node.sh 12
```

output
```bash
node version 12 has install 
```
