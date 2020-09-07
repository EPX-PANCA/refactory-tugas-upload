import unittest
import sys
sys.path.append('./')
import mode

numbers = [1,2,3,4,5,6,6,8,8,6,9]
names = ('diana','nabila','fiona','nabila','della','ayunda','desya','anastasya','vera')

class Mode(unittest.TestCase):
    def test_mode_equal(self):
        self.assertEqual(mode.mode(numbers), 6)
    
    def test_mode_notequal(self):
        self.assertNotEqual(mode.mode(numbers), 7)
       
    def test_mode_not_list(self):
        self.assertRaises(ValueError, mode.mode, names)
    

if __name__ == "__main__":
    unittest.main()