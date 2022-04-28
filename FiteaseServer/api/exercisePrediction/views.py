from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ExercisePredictionSerializer
from .models import ExercisePrediction
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt

from rest_framework import permissions
from rest_framework.permissions import AllowAny

from api.questionnaire.models import Questionnaire
from django.core import serializers

import json
import pandas as pd
# from django.core.files.storage import FileSystemStorage

import joblib

# Create your views here.
class ExercisePredictionViewSet(viewsets.ModelViewSet):
   # permission_classes = (IsAuthenticated)
    #permission_classes_by_action = (AllowAny)
    #permission_classes_by_action = { 'create' : [AllowAny]}
   # permission_classes = (permissions.AllowAny,)
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)
    #file = open('S:\FitEase\FiteaseServer\api\exercisePrediction\JoggingPipeline.pkl', 'rb')
     
   # model1= joblib.load(file)
   # load the model
    #model = joblib.load(open('WalkingPipeline.pkl', "rb"))

    queryset = ExercisePrediction.objects.all().order_by('id')
   # m = ExercisePrediction(exercisePrediction={'situps':1,'walking':0})
  #  m.save()
    

    serializer_class = ExercisePredictionSerializer

    obj = Questionnaire.objects.all()
    print(obj)
    # assuming obj is a model instance
    serialized_obj = serializers.serialize('json', [ obj, ])
    #print(serialized_obj)
    model1= joblib.load('JoggingPipeline.pkl')

   # score1=model1.predict()
  
   
   # score1=int(score1)
  

    



'''

class ExercisePredictionViewSet(viewsets.ModelViewSet):
    queryset = ExercisePrediction.objects.all().order_by('id')
    m = ExercisePrediction(exercisePrediction={'pushupp':1,'walking':0})
    m.save()
    serializer_class = ExercisePredictionSerializer

'''


'''  def exercisePrediction(request):
    # get response to backend
        if request.method == 'GET':
            return JsonResponse({'pushupp':1,'walking':0})
    queryset = ExercisePrediction.objects.all() #.order_by('id')
    serializer_class = ExercisePredictionSerializer\
        
        
    '''   


'''# This list contains a Blog object.
 Blog.objects.filter(name__startswith='Beatles')
[<Blog: Beatles Blog>]

# This list contains a dictionary.
 Blog.objects.filter(name__startswith='Beatles').values()
[{'id': 1, 'name': 'Beatles Blog', 'tagline': 'All the latest Beatles news.'}]'''