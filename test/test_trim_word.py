import unittest
import sys
sys.path.append('./')
import trim_word

class TestTrim(unittest.TestCase):
    def test_trim_equal(self):
        self.assertEqual(trim_word.trim_word("ini adalah tulisan yang sangat panjang",3), 'ini adalah tulisan')
    
    def test_trim_notequal(self):
        self.assertNotEqual(trim_word.trim_word("ini adalah tulisan yang sangat panjang",4), 'ini adalah tulisan')
    
    def test_trim_integer(self):
        self.assertRaises(ValueError, trim_word.trim_word, 3, "ini adalah tulisan yang sangat panjang")
    

if __name__ == "__main__":
    unittest.main()