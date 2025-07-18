from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DietPredictionSerializer
from .models import DietPrediction
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt

from rest_framework import permissions
from rest_framework.permissions import AllowAny

from api.questionnaire.models import Questionnaire
from django.core import serializers

import json
import pandas as pd
# from django.core.files.storage import FileSystemStorage
import numpy as np
import joblib

# Create your views here.
@csrf_exempt
def results(request):
  # Making Input paramters for models acceptabl
    dataValues = list()
    obj = Questionnaire.objects.latest('id') # get latest questionnaire
    print('The obj direct for django table', obj)

    serialized_obj = serializers.serialize('json', [ obj, ])
    data=json.loads(serialized_obj)
    print('The serialized obj of a djanogo obj', serialized_obj)


    for key, value in data[0].items():
        dataValues.append(value)
    print('The dataValues', dataValues) # to extract fields from django obj

    fields = dataValues[2] # field obj at index 2
    # Removing unwanted fields
    user = fields['User'] # get user id
    print('The user id', user) # to be used at frontend for user get req
    del fields['User']
    del fields['created_at']
    del fields['updated_at']
    print(fields)
    
    #df = pd.DataFrame.from_dict(fields, orient = 'index')
    df = pd.DataFrame([fields])
    print(df.dtypes) 

    # Loadin models from joblib
    breakfastModel = joblib.load('BreakfastPipeline.pkl')
    lunchModel = joblib.load('LunchPipeline.pkl')
    dinnerModel= joblib.load('DinnerPipeline.pkl')
  

    # Predicting the values from models
    print(breakfastModel.predict(df))
    print(lunchModel.predict(df))
    print(dinnerModel.predict(df))
    

    

    # Saving the predictions in the database
    #savePredictions = ExercisePrediction(exercisePrediction  = {'crunches':CrunchesModel.predict(df)[0],'jogging':joggingModel.predict(df)[0],'pullups':PullUpsModel.predict(df)[0],'pushups':PushUpsModel.predict(df)[0],'situps':SitUpsModel.predict(df)[0],'walking':WalkingModel.predict(df)[0]})
    #savePredictions = DietPrediction(breakfast = breakfastModel.predict(df)[0], lunch = lunchModel.predict(df)[0], dinner = dinnerModel.predict(df)[0])

     # exercisePrediction is a dict and field name of model to be used only
    #savePredictions.save()
    #newResult = DietPrediction.objects.latest('id') # get latest questionnaire
    data = {'breakfast' : breakfastModel.predict(df)[0], 'lunch' : lunchModel.predict(df)[0], 'dinner' : dinnerModel.predict(df)[0]}
    #serialized_newResult = serializers.serialize('json', [ newResult, ]) # string json formmy_obj = json.loads(serialized_newResult.replace("'", '"') # convert to json obj
    #my_obj = json.loads(serialized_newResult.replace("'", '"') # convert to json obj

    #data=json.loads(serialized_newResult) # convert to json obj

    diet = {'breakfast': ['White Bread + Egg + Tea', 'Kebab + Bran Bread + Oats', 'Greek Yogurt + Peach + Strawberry Shake','Rye Bread + Poached Egg + Strawberry + Orange','Oats + Plum + Coconut Milk','Whole Wheat Bread + Fried Egg + Mango Shake + Apple','Aloo Paratha + Yogurt','Paratha + Omelette + Tea'],
    'lunch': ['Cauliflower + Chicken + Wholewheat Chapati','Fish','Brocolli + Wholewheat Chapati','Spinach + Brown Rice','Boiled Chicken + Wholewheat Chapati','White Rice + Beef','Mutton + Wholewheat Chapati','Fish + Greek Yogurt','Avocado + Mutton + Riceflour Chapati','Egg Mayo Sandwich + Russian Salad'],
    'dinner': ['Boiled Chicken','Minced Meat','Apple + Salad','BBQ Chicken + Half Chapati','Half Chapati + Daal Chana/Maash','Riceflour Chapati + Mutton','Strawberry + Apple + Carrot + Yogurt','Rice + Chicken + Salad','Veggie loaded frittatas','Salmon Fish + Yogurt'

]
    }
    # getting the breakfast prediction
    breakfast =  diet['breakfast']
    breakfastPred = breakfast[round(data['breakfast'])]
    print('breakfastPred', breakfastPred)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    # getting the luch prediction
    lunch =  diet['lunch']
    lunchPred = lunch[round(data['lunch'])]
    print('lunchPred', lunchPred)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    # getting the dinner prediction
    dinner =  diet['dinner']
    dinnerPred = dinner[round(data['dinner'])]
    print('dinnerPred', dinnerPred)           

    dietPrediction =  {'breakfast' : breakfastPred, 'lunch' : lunchPred, 'dinner' : dinnerPred}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    return JsonResponse({'DietPrediction':'success', 'prediction': dietPrediction}) # the data need to be serialized to used at frontend/json else tyoe error


# Create your views here.
class DietPredictionViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)
    queryset = DietPrediction.objects.all().order_by('id')
    serializer_class = DietPredictionSerializer