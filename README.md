## Unit Testing 
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

## Baca Aturan Mengerjakan
1. Kerjakan dengan file terpisah untuk setiap soal dan test file yang berbeda juga, masukkan test file ke dalam folder test.
2. Buatlah minimal 3 test case untuk setiap soal.
#### 1. Jumlah Karakter

Buatlah suatu script yang dapat menghitung jumlah karakter dari suatu input; dengan menggunakan.

#### Contoh

```python
Input: saya
Output: 4

Input: lari pagi
Output: 9
```
#### 2. Kabisat

Buatlah script untuk menentukan suatu tahun merupakan tahun kabisat atau bukan.

#### Contoh:

```python
Input: 1900
Output: Bukan kabisat

Input: 2000
Output: Kabisat

Input: 2001
Output: Bukan kabisat

Input: 2016
Output: Kabisat
```
#### 3. Film Rating

Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

1) Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah __DEWASA__.
2) Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah __REMAJA__.
3) Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah __BIMBINGAN ORANG TUA__.
4) Jika usia yang dimasukkan kurang dari 9, maka rating film adalah __SEMUA USIA__.

#### Contoh:

```python
Input: 15
Output: Remaja

Input: 32
Output: Dewasa
```
#### 4. Create an method named `TrimWords` that have ability to trim words

Input
```python
tulisanPanjang = TrimWords("ini adalah tulisan yang sangat panjang",3)

print(tulisanPanjang)
```
Output
```python
/// tulisanPanjang
ini adalah tulisan
```
#### 5. Create a function `Convert` to convert `number` to `string`.

Input
```python
satu = Convert(1)
belasan = Convert(12)
puluhan = Convert(30)
print(satu)
print(belasan)
print(puluhan)
```

Output
```python
/// satu
Satu

/// belasan
Dua Belas

/// puluhan
Tiga Puluh
```
#### 6.  Create a function`Mode` that have ability to show most frequent number in a List of number. Don't use statistics module.

Input
```python
numbers = [1,2,3,4,5,6,6,8,8,6,9]
grades = [87.5, 88.5, 60.5, 90.5, 88.5]

mostNumbers = Mode(numbers)

mostGrades = Mode(grades)
```
Output
```python
// mostNumbers
6

// mostGrades
88.5
```