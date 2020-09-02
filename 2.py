import operator
def dua():
    menus = ["chicken strip", "beef burger", "steakhouse", "mushroom swiss", "whopper"]
    price = [15,10,12,20,30]
    merge = dict(zip(menus, price))
    sort = sorted(merge.items(), key=operator.itemgetter(1))
    print(dict(sort))

dua()