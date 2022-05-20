from rest_framework import serializers
from .models import DietPrediction

class DietPredictionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DietPrediction
        fields = ('breakfast','lunch','dinner')

     