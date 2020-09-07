def Convert(bil:int):
    if type(bil) != int:
        raise ValueError
    else:
        angka = ["","Satu","Dua","Tiga","Empat","Lima","Enam",
                "Tujuh","Delapan","Sembilan","Sepuluh","Sebelas"]
        Hasil = ""
        n = int(bil)
        if n>= 0 and n <= 11:
            Hasil = angka[n]
        elif n <20:
            Hasil = Convert (n-10) + " Belas"
        elif n <100:
            Hasil = Convert (n/10) + " Puluh" + Convert (n%10)
        elif n <200:
            Hasil = " Seratus" + Convert (n-100)
        elif n <1000:
            Hasil = Convert (n/100) + " Ratus" + Convert (n%100)
        elif n <2000:
            Hasil = " Seribu" + Convert (n-1000)
        elif n <1000000:
            Hasil = Convert (n/1000) + " Ribu" + Convert (n%1000)
        elif n <1000000000:
            Hasil = Convert (n/1000000) + " Juta" + Convert (n%1000000)
        elif n <1000000000000:
            Hasil = Convert (n/1000000000) + " Milyar" + Convert (n%1000000000)
        elif n <1000000000000000:
            Hasil = Convert (n/1000000000000) + " Triliyun" + Convert (n%1000000000000)
        elif n == 1000000000000000:
            Hasil = "Satu Kuadriliun"
        else:
            Hasil = "Angka Hanya Sampai Satu Kuadriliun"

        return Hasil.lower()


print(Convert(12))

# source https://www.infoteknikindustri.com/2020/05/script-utuh-program-terbilang-python.html