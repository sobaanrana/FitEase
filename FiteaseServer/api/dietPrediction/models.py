from django.db import models

# Create your models here.

class DietPrediction(models.Model):
    #User  = models.ForeignKey(CustomUser, on_delete = models.SET_NULL, blank = True, null=True ) no need as we can get it from the questionnaire
    #exercisePrediction = models.CharField(max_length = 200) Since first object was used whihc then converted to json but the value of this object is in string form which ca not be parsed or used at he frontend
    #weightLoss = models.CharField(max_length = 200)
    #weightGain = models.CharField(max_length = 200)
    breakfast = models.FloatField()
    lunch = models.FloatField()
    dinner = models.FloatField()
  




  
    

