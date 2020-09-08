import click

@click.group()
def cli():
    pass
###################################### TRANSFORM #####################################
#LOWERCASE
@cli.command(name="lowercase", help='String to lowercase')
@click.option('--text', prompt='your text')
def lowercase(text):
    print(text.lower())

#UPPERCASE
@cli.command(name="uppercase", help='String to uppercase')
@click.option('--text', prompt='your text')
def uppercase(text):
    print(text.upper())

#CAPITALIZE
@cli.command(name="capitalize", help='String to capitalize')
@click.option('--text', prompt='your text')
def capitalize(text):
    text = text.lower()
    text = ' '.join(word[0].upper() + word[1:] for word in text.split())
    #bisa juga pakai .title()
    print(text)

###################################### ARITHMETIC #####################################

#ADD
@cli.command(name="add", help="add/sum all input")
@click.argument('add', nargs=-1, type=click.INT)
def add_(add):
    add_total = 0
    [add_total := add_total + x for x in add]
    print(f"Result add : {add_total}")


#SUBSTRACT
@cli.command(name="substract", help="substract all input")
@click.argument('substract', nargs=-1, type=click.INT)
def sub_(substract):
    sub_result = substract[0] + substract[0]
    [sub_result := sub_result - x for x in substract]
    print(f"Result substract : {sub_result}")

#MULTIPLY
@cli.command(name="multiply", help="multiply all input")
@click.argument('multiply', nargs=-1, type=click.INT)
def multiply_(multiply):
    multiply_total = 1
    [multiply_total := multiply_total * x for x in multiply]
    print(f"Result multiply : {multiply_total}")


#DEVIDE
@cli.command(name="devide", help="devide all input")
@click.argument('devide', nargs=-1, type=click.INT)
def devide_(devide):
    dev_result = devide[0] * devide[0]
    [dev_result := dev_result / x for x in devide]
    print(f"Result devide : {int(dev_result)}")



######################################## STATISTIK ####################################

#MEAN
@cli.command(name="mean", help="mean all input")
@click.argument('mean', nargs=-1, type=click.INT)
def mean_(mean):
    leng = len(mean)
    mean_total = 0
    [mean_total := mean_total + x for x in mean]
    result = mean_total/leng
    print(f"Result Mean : {result}")


#MEDIAN
@cli.command(name="median", help="median all input")
@click.argument('median', nargs=-1, type=click.INT)
def median_(median):
    n_num = list(median)
    n = len(n_num) 
    n_num.sort() 
    if n % 2 == 0: 
        median1 = n_num[n//2] 
        median2 = n_num[n//2 - 1] 
        median = (median1 + median2)/2
    else: 
        median = n_num[n//2] 
    print("Result Median : " + str(median))


#MODE
@cli.command(name="mode", help="mode all input")
@click.argument('mode', nargs=-1, type=click.INT)
def mode_(mode):
    mode = list(mode)
    result = max(mode, key = mode.count)
    print(f"Result Mode : {result}")


#FMEAN
@cli.command(name="fmean", help="fmean all input")
@click.argument('fmean', nargs=-1, type=click.FLOAT)
def fmean_(fmean):
    leng = len(fmean)
    fmean_total = 0
    [fmean_total := fmean_total + x for x in fmean]
    result = fmean_total/leng
    print(f"Result Mean : {result}")



##################################### PALINDROME #####################################

#Palindrome
@cli.command(name="palindrome", help='Check palindrome')
@click.option('--text', prompt='your text')
def palindrome_(text):
    n = text
    n = ''.join([x.lower() for x in n if x.isalpha()])
    if n == n[::-1]:
        print(f"String : {text}")
        print("Is Palindrome? True")
    else:
        print(f"String : {text}")
        print("Is Palindrome? No")


##################################### OBFUSCATOR #####################################

#Obfuscator
@cli.command(name="obfuscator", help='String Obfuscator')
@click.option('--text', prompt='your text')
def obfuscator_(text):
    list=["&#"+str(ord(x)) for x in text]
    print(";".join(list))


################################### Random String #####################################
#belum selesai wkwkwk
# #random
import string
import random
@cli.command(name="random", help="Generate Random String")
@click.option('--length', default=32)
# @click.option('--letters')
# @click.option('--lowercase')
# @click.option('--uppercase')
# @click.option('--numbers')
def random_(length):
    gen = string.digits + string.ascii_lowercase + string.ascii_uppercase
    result = ''.join(random.choices(gen, k=length))
    print(result)


####################### Get IP Address in private network ############################

#GET LOCAL IP
import socket
@cli.command(name="ip", help='Get Local IP')
def local_ip_():
    ip = socket.gethostbyname(socket.gethostname())
    print(f"Local IP : {ip}")
#source : https://stackoverflow.com/questions/166506/finding-local-ip-addresses-using-pythons-stdlib


########################### Get External IP Address ##################################

#Get PUBLIC IP
import urllib.request


@cli.command(name="ip-external", help='Get Public IP')
def public_ip_():
    ip = urllib.request.urlopen('https://ident.me').read().decode('utf8')
    print(f"Public IP : {ip}")
#source : https://stackoverflow.com/questions/2311510/getting-a-machines-external-ip-address-with-python



######################################## SUM #########################################

#sum
@cli.command(name="sum", help='sum all input')
def sum_():
    num = 1
    result = 0
    input_ = int(input(f"Insert {num}st number: ") or 0)
    result += input_
    while input_:
        num += 1
        if num == 2:
            input_ = int(input(f"Insert {num}nd number: ") or 0)
            result += input_
        elif num == 3:
            input_ = int(input(f"Insert {num}rd number: ") or 0)
            result += input_ 
        else:
            input_ = int(input(f"Insert {num}th number: ") or 0)
            result += input_
    print(result)



    


from .crud_cli import get_
cli.add_command(get_)




# Catatan
# from .test import sums_ -> contoh import cli terpisah (sums_  nama fungsinya)
# cli.add_command(sums_)
#https://github.com/cdeil/python-cli-examples/tree/master/click/greet