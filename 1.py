def satu():
    first = ['Behind', 'every', 'great', 'man']
    second = ['is', 'a', 'woman']
    third = ['rolling', 'her', 'eyes']

    joins = [*first, *second, *third]

    print(', '.join(joins))

satu()