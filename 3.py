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
print("\n")
tiga(text_2)