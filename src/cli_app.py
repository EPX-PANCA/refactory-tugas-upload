import click
import datetime
from decouple import config
import requests
import json

API_KEY = config('API_KEY')

def get_city(city, unit='default'):
    return requests.get(f"http://api.openweathermap.org/data/2.5/weather?q={city}&units={unit}&appid={API_KEY}").json()

def convert_time(val):
    t = datetime.datetime.fromtimestamp(val)
    time = t.strftime('%A, %B %d, %Y %I:%M:%S %p')
    return time


@click.group()
def cli():
    pass

@cli.command(name="weather", help='Get Data Weather')
@click.argument("city")
@click.option("--celcius", is_flag=True)
@click.option("--fahrenheit", is_flag=True)
@click.option("--temp", is_flag=True)

def wheater_(city, celcius, fahrenheit, temp):
    if temp:
        if celcius:
            dat = get_city(city, 'metric')
            print(f''' 
{dat['name']}, {convert_time(dat['dt'])}
--------------------------------------------------
{dat['main']['temp']}\N{DEGREE SIGN} Celcius | {dat['weather'][0]['main']}, {dat['weather'][0]['description']}
            ''')
        elif fahrenheit:
            dat = get_city(city, 'imperial')
            print(f''' 
{dat['name']}, {convert_time(dat['dt'])}
--------------------------------------------------
{dat['main']['temp']}\N{DEGREE SIGN} Fahrenheit | {dat['weather'][0]['main']}, {dat['weather'][0]['description']}
            ''')
        else:
            dat = get_city(city)
            print(f''' 
{dat['name']}, {convert_time(dat['dt'])}
--------------------------------------------------
{dat['main']['temp']}\N{DEGREE SIGN} Kelvin | {dat['weather'][0]['main']}, {dat['weather'][0]['description']}
            ''')

    elif celcius:
        dat = get_city(city, 'metric')
        print(f'''
datetime    : {convert_time(dat['dt'])}
city        : {dat['name']}
temperature : {dat['main']['temp']}\N{DEGREE SIGN} Celcius
weather     : {dat['weather'][0]['main']}, {dat['weather'][0]['description']}
sunrise     : {convert_time(dat['sys']['sunrise'])}
sunset      : {convert_time(dat['sys']['sunset'])}
    ''')
    elif fahrenheit:
        dat = get_city(city, 'imperial')
        print(f'''
datetime    : {convert_time(dat['dt'])}
city        : {dat['name']}
temperature : {dat['main']['temp']}\N{DEGREE SIGN} Fahrenheit
weather     : {dat['weather'][0]['main']}, {dat['weather'][0]['description']}
sunrise     : {convert_time(dat['sys']['sunrise'])}
sunset      : {convert_time(dat['sys']['sunset'])}
    ''')
    else:
        dat = get_city(city)
        print(f'''
datetime    : {convert_time(dat['dt'])}
city        : {dat['name']}
temperature : {dat['main']['temp']}\N{DEGREE SIGN} Kelvin
weather     : {dat['weather'][0]['main']}, {dat['weather'][0]['description']}
sunrise     : {convert_time(dat['sys']['sunrise'])}
sunset      : {convert_time(dat['sys']['sunset'])}
        ''')






