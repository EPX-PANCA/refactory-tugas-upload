def film_rating(umur:int):
    if type(umur) != int:
        raise ValueError
    else:
        if umur >= 21:
            return ('DEWASA')
        elif umur >= 13:
            return ('REMAJA')
        elif umur >= 9:
            return ('BIMBINGAN ORANG TUA')
        elif umur < 9:
            return ('SEMUA USIA')
    

# print(film_rating(32))
        