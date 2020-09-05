import requests
import json
fetch_data = requests.get('https://mul14.github.io/data/employees.json').json()


    # fetch data => salary > 15 JT
salary = [s for s in fetch_data if s['salary'] > 15000000]
res_salary = json.dumps(salary, indent=6)
print(res_salary)

    # fetch data => Life DKI Jkt
life_jkt = [l for l in fetch_data if l['addresses'][0]['label']=='home' and l['addresses'][0]['city'] =='DKI Jakarta' ]
res_jkt = json.dumps(life_jkt, indent=6)
print(res_jkt)

    #fetch data -> birthday 04/April
birthday = [b for b in fetch_data if b['birthday'].split('-')[1] == '04']
res_birth = (json.dumps(birthday, indent=6))
print(res_birth)

    #fetch data -> department = research & develop
research_develop = [rd for rd in fetch_data if rd['department']['name'] == 'Research and development']
res_rd = (json.dumps(research_develop, indent=6))
print(res_rd)





