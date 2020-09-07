import unittest
import sys
sys.path.append('./')
import film_rating

class TestFilm(unittest.TestCase):
    def test_film_equal(self):
        self.assertEqual(film_rating.film_rating(15), 'REMAJA')
    
    def test_film_notequal(self):
        self.assertNotEqual(film_rating.film_rating(15), 'DEWASA')
    
    def test_film_string(self):
        self.assertRaises(ValueError, film_rating.film_rating, '17')
    

if __name__ == "__main__":
    unittest.main()