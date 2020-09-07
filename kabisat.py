def kabisat(tahun:int):
    if type(tahun) != int:
        raise ValueError
    else:
        if((tahun%4==0 and tahun%100!=0) or (tahun % 400 == 0)):
            return ('kabisat')
        else:
            return ('bukan kabisat')

# print(kabisat(1900))
# print(kabisat(2000))