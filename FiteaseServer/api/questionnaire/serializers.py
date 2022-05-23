from rest_framework import serializers
from .models import Questionnaire

class QuestionnaireSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Questionnaire
        fields = ('id','user','Age','Gender','Weight','Height','Lifestyle','Goal','BMI','BMR','Calorie_Count')

     