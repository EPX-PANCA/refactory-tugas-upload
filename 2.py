from num2words import num2words

def Convert(val):
    return num2words(val, lang='id')



satu = Convert(1)
belasan = Convert(12)
puluhan = Convert(30)
print(satu)
print(belasan)
print(puluhan)
