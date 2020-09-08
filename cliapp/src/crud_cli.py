import click
import json

@click.group()
def cli():
    pass


@cli.command(name="get", help='get data JSON')
def get_():
    f = open('data.json')
    data = json.load(f)
    print(json.dumps(data, indent=4))


# @cli.command(name="create", help='Get data JSON')
# @click.option("--data", prompt='add data')
# def create_(data):
#     f = open('data.json','w')
#     x = []
#     x.append(data)
#     f.write(str(x))
#     f.close