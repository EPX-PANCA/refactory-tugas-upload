def jumlah_karakter(input:str):
    if type(input) != str:
        raise ValueError
    return len(input)
        


# print(jumlah_karakter('lari pagi'))