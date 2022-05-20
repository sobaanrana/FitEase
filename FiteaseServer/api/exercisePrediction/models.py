from django.db import models

# Create your models here.

class ExercisePrediction(models.Model):
    #User  = models.ForeignKey(CustomUser, on_delete = models.SET_NULL, blank = True, null=True ) no need as we can get it from the questionnaire
    #exercisePrediction = models.CharField(max_length = 200) Since first object was used whihc then converted to json but the value of this object is in string form which ca not be parsed or used at he frontend
    crunches = models.IntegerField(default=0)
    jogging = models.IntegerField(default=0)
    pullups = models.IntegerField(default=0)
    pushups = models.IntegerField(default=0)
    situps = models.IntegerField(default=0)
    walking = models.IntegerField(default=0)




  
    

