def sort_odd(numbers):
    odds = iter(sorted(i for i in numbers if i % 2))
    print([next(odds) if i % 2 else i for i in numbers])


numbers = [9,4,2,4,1,5,3,0]
sort_odd(numbers)
