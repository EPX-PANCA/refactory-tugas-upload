def trim_word(word:str, leng:int):
    if type(word) !=str and type(leng) !=int:
        raise ValueError
    trim = ' '.join(word.split(" ")[:leng])
    return trim

# print(trim_word("ini adalah tulisan yang sangat panjang",3))
