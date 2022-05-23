from rest_framework import serializers
from .models import Prediction

class PredictionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Prediction
        fields = ('user','created_at','updated_at')

     