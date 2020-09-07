def mode(ls:list):
    if type(ls) != list: #hanya angka saja
        raise ValueError
    return max(set(ls), key=ls.count)
    #max -> get max lalu diitung banyaknya

numbers = [1,2,3,4,5,6,6,8,8,6,9]
grades = [87.5, 88.5, 60.5, 90.5, 88.5]

print(mode(numbers))
print(mode(grades))