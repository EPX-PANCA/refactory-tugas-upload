def Mode(list): 
    counter = 0
    num = list[0] 
    for i in list: 
        result = list.count(i) 
        if(result> counter): 
            counter = result
            num = i 
    return num 


numbers = [1,2,3,4,5,6,6,8,8,6,9]
grades = [87.5, 88.5, 60.5, 90.5, 88.5]

mostNumbers = Mode(numbers)
mostGrades = Mode(grades)

print(mostNumbers)
print(mostGrades)
