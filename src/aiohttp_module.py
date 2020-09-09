import aiohttp
import asyncio

class aio:
    @staticmethod
    async def get(url):
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as resp:
                return await resp.json()
                

    @staticmethod
    async def delete(url):
        async with aiohttp.ClientSession() as session:
            async with session.delete(url) as resp:
                return await resp.text()
    
    @staticmethod
    async def post(url, arg):
        async with aiohttp.ClientSession() as session:
            async with session.post(url, json=arg) as resp:
                return await resp.text()