import unittest
import sys
sys.path.append('./')
import num_word

class Testnumword_(unittest.TestCase):
    def test_numword_equal(self):
        self.assertEqual(num_word.Convert(12), 'dua belas')
    
    def test_numword_notequal(self):
        self.assertNotEqual(num_word.Convert(11), 'satu belas')
    
    def test_numword_string(self):
        self.assertRaises(ValueError, num_word.Convert, '25')
    

if __name__ == "__main__":
    unittest.main()