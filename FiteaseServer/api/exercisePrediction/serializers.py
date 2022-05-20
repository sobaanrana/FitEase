from rest_framework import serializers
from .models import ExercisePrediction

class ExercisePredictionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ExercisePrediction
        #fields = ('exercisePrediction',)
        fields = ('crunches','jogging','pullups','pushups','situps','walking')

     