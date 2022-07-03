from django.db import models
# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length = 100 , blank = True, null = True)       
    email = models.CharField(max_length = 100)
    phone = models.IntegerField(max_length = 200, blank = True, null = True)
    message = models.CharField(max_length =500)

    created_at = models.DateField(auto_now_add=True, auto_created = True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.email
    