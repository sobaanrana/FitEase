from django.db import models
from api.user.models import CustomUser

# Create your models here.

class Questionnaire(models.Model):
    User  = models.ForeignKey(CustomUser, on_delete = models.SET_NULL, blank = True, null=True )
    Age = models.IntegerField()
    Gender = models.CharField(max_length = 50)
    Weight = models.FloatField()
    Height = models.FloatField()
    Lifestyle = models.CharField(max_length = 50)
    Goal = models.CharField(max_length = 50)
    BMI = models.FloatField(default=0.0)
    BMR = models.FloatField(default=0.0)
    Calorie_Count = models.FloatField(default=0.0)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)



  
    


# set name of each field with the first name 
# get first name and id as foreign key from sql