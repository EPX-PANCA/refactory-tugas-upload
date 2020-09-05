import requests
from bs4 import BeautifulSoup
 
page = requests.get('https://indeks.kompas.com/headline')
soup = BeautifulSoup(page.text, 'html.parser')
if page.status_code==200:
    div = soup.find_all(class_="article__link")

title = [t.text for t in div]
url = [u['href'] for u in div]

for i in range(5):
    res = list({title[i], url[i]})
    print(f"Title : {res[0]} \n Url : {res[1]} \n")


