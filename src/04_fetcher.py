import asyncio
import json
from aiohttp_module import aio

jsonData ={
        "id": 30,
        "name": "Someone"
    }

class Fetcher:
    async def Get(link):
        get_data = await aio.get(link)
        print(json.dumps(get_data, indent=5))
    
    async def Delete(link):
        delete_data = await aio.delete(link)
        j_del = json.loads(delete_data)
        print(json.dumps(j_del, indent=5))

    async def Post(link, data):
        post_data = await aio.post(link, data)
        j_post = json.loads(post_data)
        print(json.dumps(j_post, indent=5))


async def run():
    await asyncio.gather(
        Fetcher.Get("https://httpbin.org/get"),
        Fetcher.Delete("https://httpbin.org/delete"),
        Fetcher.Post("https://httpbin.org/post", jsonData),
    )


if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run())