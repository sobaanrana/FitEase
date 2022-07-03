from django.db import models


# Create your models here.

class SuccessStory(models.Model):
    title = models.CharField(max_length = 50)
    description = models.CharField(max_length = 5000) 
   
    author = models.CharField(max_length =100)
    email = models.EmailField(max_length=254)
    #image = models.ImageField(upload_to = 'images/',blank = True, null=True)

    created_at = models.DateField(auto_now_add=True, auto_created = True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.email
    