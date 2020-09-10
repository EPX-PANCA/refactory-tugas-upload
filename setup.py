from setuptools import setup, find_packages

setup(
    name='cliweather_panca',
    version='0.1',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'click',
        'requests',
        'python-decouple',

        # tambahkan package yang kalian gunakan untuk membangun aplikasi disini!
    ],
    entry_points='''
        [console_scripts]
        cliweather=main:cli
    ''',
)