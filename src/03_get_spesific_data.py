import asyncio
import json
from aiohttp_module import aio

url = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"

async def get_data():
    get = await aio.get(url)
    lst = [i for i in get if i['category']=='fruits']
    dumps = json.dumps(lst, indent=5)
    print(dumps)

async def run_fetch_async():
    await asyncio.create_task(get_data())
    

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run_fetch_async())
