import unittest
import sys
sys.path.append('./')
import jumlah_karakter_

class TestJumlah(unittest.TestCase):
    def test_karakter_equal(self):
        self.assertEqual(jumlah_karakter_.jumlah_karakter('lari pagi'), 9)

    
    def test_karakter_notequal(self):
        self.assertNotEqual(jumlah_karakter_.jumlah_karakter('lari pagi'), 7)

    
    def test_karakter_integer(self):
        self.assertRaises(ValueError, jumlah_karakter_.jumlah_karakter, 12)
    

if __name__ == "__main__":
    unittest.main()