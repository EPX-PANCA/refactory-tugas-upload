def Trim(text,leng):
    trim = text[:leng]
    return trim + "..."

tulisanPanjang = Trim("ini adalah tulisan yang sangat panjang",8)
print(tulisanPanjang)