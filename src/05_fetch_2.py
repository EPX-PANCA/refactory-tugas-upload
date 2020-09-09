import asyncio
import json
from aiohttp_module import aio

async def get_combine():
    posts = await aio.get('https://jsonplaceholder.typicode.com/posts')
    users = await aio.get('https://jsonplaceholder.typicode.com/users/')
    for p in posts:
        p['user'] = [u for u in users if u['id'] == p['userId']]
        dumps = json.dumps(p, indent=5)
        print(dumps)

async def combine_call():
    await asyncio.create_task(get_combine())

    

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(combine_call())