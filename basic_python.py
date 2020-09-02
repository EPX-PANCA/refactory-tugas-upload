import operator
import string 
############################# NOMOR 1 #############################
print("\n")
def satu():
    first = ['Behind', 'every', 'great', 'man']
    second = ['is', 'a', 'woman']
    third = ['rolling', 'her', 'eyes']

    joins = [*first, *second, *third]

    print(', '.join(joins))

satu()
print("\n")

############################# NOMOR 2 #############################
def dua():
    menus = ["chicken strip", "beef burger", "steakhouse", "mushroom swiss", "whopper"]
    price = [15,10,12,20,30]
    merge = dict(zip(menus, price))
    sort = sorted(merge.items(), key=operator.itemgetter(1))
    print(dict(sort))

dua()
print("\n")

############################# NOMOR 3 #############################
text_1 = "Mammals"
text_2 = "Bruiser build"

def tiga(text): 
    count = {}
    for i in text.lower(): 
        if i in count: 
            count[i] += "*"
        else: 
            count[i] = "*"
    print(count)

tiga(text_1)
tiga(text_2)
print("\n")



############################# NOMOR 4 #############################
def bubble_sort(numbers):
    exchanges = True
    i = len(numbers)-2
    step = 0
    while i > 0 and exchanges:
        exchanges = False
        for j in range(i):
            if numbers[j]>numbers[j+1]:
                exchanges = True
                numbers[j], numbers[j+1] = numbers[j+1], numbers[j]
                step += 1
                print(f"Step {step} : "  + str(numbers)) 
 
numbers = [12,3,5,4,8,9]
bubble_sort(numbers)
print("\n")



############################# NOMOR 5 #############################

print("\n")



############################# NOMOR 6 #############################
def find_missing(chars):
    charset = string.ascii_lowercase if chars[0] == 'a' else string.ascii_uppercase
    for letter in charset[charset.index(chars[0]):]:
        if letter not in chars:
            return letter[0]


list_letters_first = ["a","b","c","d","e","g","h"]
list_letters_second = ["X","Z"]

print(f"list_letters_first = {find_missing(list_letters_first)}")
print(f"list_letters_first = {find_missing(list_letters_second)}")
print("\n")



############################# NOMOR 7 #############################
def sort_odd(numbers):
    odds = iter(sorted(i for i in numbers if i % 2))
    print([next(odds) if i % 2 else i for i in numbers])


numbers = [9,4,2,4,1,5,3,0]
sort_odd(numbers)