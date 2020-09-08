## CLI App (folder cliapp)


### TASK:

# Command Line App - Challenge

## #1 String Transformation

Command

```sh
app lowercase "I aM CrAzY TeXT"
# Output "i am crazy text"

app uppercase "I aM CrAzY TeXT"
# Output "I AM CRAZY TEXT"

app capitalize "I aM CrAzY TeXT"
# Output "I Am Crazy Text"
```

## #2 Arithmetic

Command

```sh
app add 1 4 5 2 3
# Output 15

app subtract 10 2 4
# Output 4

app multiply 3 5 8
# Output 120

app divide 100 5 2
# Output 10
```

All of arithmetic command should accepts infinite parameters.
## #3 Statistic

Command

```sh
app mean 90 80 77 45 32 45

app median 10 2 4 5 9 12

app mode 3 5 8 0 9 8 3 0 8

app fmean 100 53 28 90 130
```

All of arithmetic command should accepts infinite parameters.
## #4 Palindrome

Command

```sh
app palindrome "Saya ingin pergi ke pasar"

app palindrome "Kasur ini rusak"

app palindrome "Ibu Ratna antar ubi"

app palindrome "Aku suka rajawali, bapak. Apabila wajar, aku suka."
```

Output example

```
String: "Saya ingin pergi ke pasar"
Is palindrome? No

String: "Kasur ini rusak"
Is palindrome? Yes

String: "Ibu Ratna antar ubi"
Is palindrome? Yes

String: "Aku suka rajawali, bapak. Apabila wajar, aku suka."
Is palindrome? Yes
```

## #5 Obfuscator

Command

```sh
app obfuscate "email@example.com"
```

Output example

```
&#101;&#109;&#97;&#105;&#108;&#64;&#101;&#120;&#97;&#109;&#112;&#108;&#101;&#46;&#99;&#111;&#109;
```

## #6 Random String

Create a command to generate random string. By default will generate 32 random alphanumeric.

This is just a simple thing, so please don't use 3rd-party library.

```sh
app random
# Output Nf2HZlmJ9TItezKL1EcVrstKjxzLaQj8

app random --length=10
# Output l1BgUotRmS

app random --letters=false
# Output 83628194739182748381981283721982

app random --numbers=false
# Output kdBOsSSFvqLCRvommVauHzmPdvSoYRIs

app random --uppercase
# Output 9JWSY6OOTNPJ6LZLUQE9JIXWPQTLC0K2

app random --numbers=false --lowercase --length=20
# Output ljmuoyopwxcvhycowqqi
```

## #7 Get IP Address in private network

This command will get your private IP address. 

Command

```sh
app ip
```

Output example

```
192.168.100.11
```

## #8 Get External IP Address

This command will get your public IP address.

Command

```sh
app ip-external
```

Output example

```
125.163.90.49
```

## #9 Infinite inputs

Make a CLI program to sum every numeric inputs until it get empty input.

```
app sum
Insert 1st number: 4 
Insert 2nd number: 7
Insert 3rd number: -3
Insert 4th number: 1
Insert 5th number:
Result: 9
```
## #10 CRUD CLI-APP
1. Buatlah sebuah CLI-APP dengan functional requirements CRUD.
2. Nama CLI-APP adalah users. contoh pemanggilan cli-app adalah `users get`.
2. Simpan semua data di dalam file json dengan nama *users.json*.
3. Untuk penggunaan option dan argument sebagai parameter tidak ada kententuan, silahkan tentukan masing-masing.
4. Berikut adalah format data nya:
```json
nama file = users.json
{
    "gender": "male",
    "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
    },
    "location": {
        "street": "9278 new road",
        "city": "kilcoole",
        "state": "waterford",
        "postcode": "93027",
        "email": "brad.gibson@example.com",
        "phone": "011-962-7516",
        "cell": "081-454-0666"
    }
}
```
