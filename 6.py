import string 
def find_missing(chars):
    charset = string.ascii_lowercase if chars[0] == 'a' else string.ascii_uppercase
    for letter in charset[charset.index(chars[0]):]:
        if letter not in chars:
            return letter[0]


list_letters_first = ["a","b","c","d","e","g","h"]
list_letters_second = ["X","Z"]

print(f"list_letters_first = {find_missing(list_letters_first)}")
print(f"list_letters_first = {find_missing(list_letters_second)}")

