data = [
    {
	    "id" : 1,
        "fullname" : "ratna putri",
        "address" : "jakarta",
        "salary" : 5000000,
        "phone" : '099903'
    },
    {
	    "id" : 2,
        "fullname" : "hamish daud",
        "address" : "jakarta",
        "salary" : 2000000,
        "phone" : '34232949'
    },
]

class Employee:
    
    def __init__(self, data):
        self.data = data

    def create(self,data):
        data = list(data.items())
        data.insert(0,("id",self.data[len(self.data) - 1]["id"] + 1))
        self.data.append(dict(data))
        return self.data

    def read(self):
        return self.data
    
    def update(self,id,data):
        for i, val in enumerate(self.data):
            if val['id'] == id:
                data = list(data.items())
                data.insert(0,("id",id))
                self.data[i] = dict(data)
        return self.data

    def delete(self,id):
        for i, value in enumerate(self.data): #Fungsi enumerate() mengembalikan objek enumerate yaitu objek iterable yang tiap itemnya berpasangan dengan indeks.
            if value['id'] == id:
                del self.data[i] 
        return self.data

employee = Employee(data)
print(employee.create({"fullname":"ratna putri", "address":"jakarta", "salary":5000000, "phone":"099903"}))
print(employee.delete(2))
print(employee.read())
print(employee.update(3,{"fullname":"raisa andriana", "address":"bekasi", "salary":1000000, "phone":"9939999"}))
