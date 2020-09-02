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