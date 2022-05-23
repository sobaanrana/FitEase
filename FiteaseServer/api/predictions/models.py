from django.db import models

# Create your models here.

class Prediction(models.Model):
    user = models.EmailField(max_length=250)
    created_at = models.DateField(auto_now_add=True, auto_created = True)
    updated_at = models.DateField(auto_now=True)



  
    

