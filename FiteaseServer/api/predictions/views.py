from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PredictionSerializer
from .models import Prediction
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
def exercisePrediction(request):
    # user email will be the latest instance email as he has just submitted the daily report and then get the msg repsons
    dataValues = list()
    user = Prediction.objects.latest('id') # get latest email
    #print('The user direct for django table', user)

    serializedUser = serializers.serialize('json', [ user, ])
    #print('The serialized obj of a djanogo obj', serializedUser)
    userData=json.loads(serializedUser)
    email = userData[0]['fields']['user'] # getting email of logged in user

    # Getting input parameters from Questionnaire related to this email
    objects_all = Questionnaire.objects.filter(user=email)
    #print("objects_all",objects_all)
    
    questionnaire = list()
    for obj in objects_all: 
        serialized_obj = serializers.serialize('json', [obj, ])
        questionnaire = json.loads(serialized_obj)
    #print('The serialized obj of all the object with particular email', questionnaire)

    # Extracting Input parameters from questionnaire serialized obj
    questionnaireFields=questionnaire[0]['fields']
    del questionnaireFields['user']
    del questionnaireFields['created_at']
    del questionnaireFields['updated_at']

    #print(questionnaireFields)
    
    #df = pd.DataFrame.from_dict(fields, orient = 'index')
    # making data frame of questionnaire
    df = pd.DataFrame([questionnaireFields])
    #print(df.dtypes) 
    
    # Loadin models from joblib
    CrunchesModel = joblib.load('CrunchesPipeline.pkl')
    joggingModel = joblib.load('JoggingPipeline.pkl')
    PullUpsModel= joblib.load('PullUpsPipeline.pkl')
    PushUpsModel= joblib.load('PushUpsPipeline.pkl')
    SitUpsModel= joblib.load('SitUpsPipeline.pkl')
    WalkingModel = joblib.load('WalkingPipeline.pkl')

    # Predicting the values from models
    print(CrunchesModel.predict(df))
    print(joggingModel.predict(df))
    print(PullUpsModel.predict(df))
    print(PushUpsModel.predict(df))
    print(SitUpsModel.predict(df))
    print(WalkingModel.predict(df))

    
    # Saving the predictions in the database
    #savePredictions = ExercisePrediction(exercisePrediction  = {'crunches':CrunchesModel.predict(df)[0],'jogging':joggingModel.predict(df)[0],'pullups':PullUpsModel.predict(df)[0],'pushups':PushUpsModel.predict(df)[0],'situps':SitUpsModel.predict(df)[0],'walking':WalkingModel.predict(df)[0]})
    #savePredictions = ExercisePrediction(crunches=CrunchesModel.predict(df)[0],jogging=joggingModel.predict(df)[0],pullups=PullUpsModel.predict(df)[0],pushups=PushUpsModel.predict(df)[0],situps=SitUpsModel.predict(df)[0],walking=WalkingModel.predict(df)[0])

     # exercisePrediction is a dict and field name of model to be used only
    #savePredictions.save()
    #newResult = ExercisePrediction.objects.latest('id') # get latest questionnaire
    #serialized_newResult = serializers.serialize('json', [ newResult, ]) # string json formmy_obj = json.loads(serialized_newResult.replace("'", '"') # convert to json obj
    #data=json.loads(serialized_newResult) # convert to json obj

    exercisePred = {'crunches' : CrunchesModel.predict(df)[0], 'jogging' : joggingModel.predict(df)[0], 'pullups' : PullUpsModel.predict(df)[0], 'pushups' : PushUpsModel.predict(df)[0], 'situps' : SitUpsModel.predict(df)[0], 'walking' : WalkingModel.predict(df)[0]}
    #print('The newResult', exercisePred)
    dataPred = list()
    for ex in exercisePred:
        if exercisePred[ex] == 1:
            dataPred.append(ex)
    print('The data', dataPred)

            
    return JsonResponse({'ExercisePrediction':'success', 'prediction': dataPred}) # the data need to be serialized to used at frontend/json else tyoe error


# Create your views here.
@csrf_exempt
def dietPrediction(request):
  # user email will be the latest instance email as he has just submitted the daily report and then get the msg repsons
    dataValues = list()
    user = Prediction.objects.latest('id') # get latest questionnaire
    #print('The user direct for django table', user)

    serializedUser = serializers.serialize('json', [ user, ])
    #print('The serialized obj of a djanogo obj', serializedUser)
    userData=json.loads(serializedUser)
    email = userData[0]['fields']['user'] # getting email of logged in user

    # Getting input parameters from Questionnaire related to this email
    objects_all = Questionnaire.objects.filter(user=email)
    #print("objects_all",objects_all)
    
    questionnaire = list()
    for obj in objects_all: 
        serialized_obj = serializers.serialize('json', [obj, ])
        questionnaire = json.loads(serialized_obj)
    #print('The serialized obj of all the object with particular email', questionnaire)

    # Extracting Input parameters from questionnaire serialized obj
    questionnaireFields=questionnaire[0]['fields']
    del questionnaireFields['user']
    del questionnaireFields['created_at']
    del questionnaireFields['updated_at']

    #print(questionnaireFields)
    # making data frame of questionnaire
    df = pd.DataFrame([questionnaireFields])
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

    diet = {'breakfast': [('White Bread + Eggs + Tea (Milk and Sugar)',492),('Aloo Paratha (2) + Yogurt(1 cup)',494),('Milk + Apple (2) + Boiled Eggs',613),('Paratha + Omelette(2) + Tea (Milk and Sugar)',372),('Rye Bread + Poached Eggs (2) + Strawberry (2) + Orange (2)',508),('Bran flakes(with milk) + Pear (2) + Almond Milk',464),('Oats (1 cup) + Plum + Coconut Milk',887),('Whole Wheat Bread + Fried Egg + Mango Shake + Apple',654),('Chicken Kebab + Bran Bread + Oats (1 cup)',1066),('Greek Yogurt + Peach (2)+ Strawberry Shake',445)],
    'lunch': [('Cauliflower + Chicken + Wholewheat Chapati',710),('Fish',523),('Brocolli + Wholewheat Chapati',418),('Spinach + Brown Rice',550),('Boiled Chicken + Wholewheat Chapati',470),('White Rice + Beef',1053),('Mutton + Wholewheat Chapati',952),('Fish + Greek Yogurt',623),('Avocado + Mutton + Riceflour Chapati',745),('Egg Mayo Sandwich + Russian Salad',694)],
    'dinner': [('Boiled Chicken',412),('Veggie loaded frittatas',448),('Apple (2) + Boiled Chicken + Mixed Green Salad(big)',632),('BBQ Chicken + Half Chapati',581),('Half Chapati + Daal Chana/Maash',350),('Riceflour Chapati + Mutton',1006),('Strawberry (2) + Apple (2) + Carrot (2) + Yogurt',472),('Rice + Chicken + Salad',949),('Minced Meat',649),('Salmon Fish + Yogurt',924)],
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

class PredictionViewSet(viewsets.ModelViewSet):
   # permission_classes = (IsAuthenticated)
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)
    #file = open('S:\FitEase\FiteaseServer\api\exercisePrediction\JoggingPipeline.pkl', 'rb')
     


    queryset = Prediction.objects.all().order_by('id')
    #m = ExercisePrediction(exercisePrediction={'situps':1,'hello':0})
    #m.save()
    

    serializer_class = PredictionSerializer

    




