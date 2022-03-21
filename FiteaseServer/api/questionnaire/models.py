from django.db import models

# Create your models here.

class Questionnaire(models.Model):
    age = models.IntegerField()
    weight = models.FloatField()
    height = models.FloatField()
    #gender = models.CharField(max_length = 50)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

  
    


# set name of each field with the first name 
# get first name and id as foreign key from sql