from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    first_name =  models.CharField(blank=True,null = True, max_length = 150, verbose_name='first name',default = 'Anonymous')
    last_name = models.CharField(blank=True,null = True, max_length = 150, verbose_name='last name',default = 'Anonymous')

    ##name = models.CharField(max_length=50, default = 'Anonymous')
    email = models.EmailField(max_length=254, unique = True)

    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    phone = models.CharField(max_length = 20, blank = True, null = True)
    gender = models.CharField(max_length = 10, blank = True, null = True)

    session_token = models.CharField(max_length = 10, default = 0)
    
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)