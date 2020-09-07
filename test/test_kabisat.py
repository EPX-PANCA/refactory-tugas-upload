import unittest
import sys
sys.path.append('./')
import kabisat

class Kabisat(unittest.TestCase):
    def test_kabisat_equal(self):
        self.assertEqual(kabisat.kabisat(2000), 'kabisat')
        self.assertEqual(kabisat.kabisat(1900), 'bukan kabisat')

    
    def test_kabisat_notequal(self):
        self.assertNotEqual(kabisat.kabisat(2000), 'bukan kabisat')
        self.assertNotEqual(kabisat.kabisat(1900), 'kabisat')
    
    def test_kabisat_string(self):
        self.assertRaises(ValueError, kabisat.kabisat, '2000')
    

if __name__ == "__main__":
    unittest.main()