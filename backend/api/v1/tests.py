from django.test import TestCase
from rest_framework.test import APIClient

from .models import User


# Create your tests here.
class UserTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create(email="eacassecasse@servor.tech", name='Edmlson', role="student", password="12345678")
        self.client.login(email="eacassecasse@servor", password="12345678")

    def test_create_user(self):
        response = self.client.post('/users/',
                                    {'email': 'admin@servor.tech', 'name': 'Administrator', 'role': 'admin', 'password': '@dm1n'})
        self.assertEqual(response.status_code, 201)

