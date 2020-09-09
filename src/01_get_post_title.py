import asyncio
from aiohttp_module import aio

url = "https://jsonplaceholder.typicode.com/posts"

async def get_data():
    get = await aio.get(url)
    for i in get:
        print(f"Title : {i['title']}")

async def run_fetch_async():
    task = asyncio.create_task(get_data())
    await task

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run_fetch_async())
