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
    savePredictions = ExercisePrediction(crunches=CrunchesModel.predict(df)[0],jogging=joggingModel.predict(df)[0],pullups=PullUpsModel.predict(df)[0],pushups=PushUpsModel.predict(df)[0],situps=SitUpsModel.predict(df)[0],walking=WalkingModel.predict(df)[0])

     # exercisePrediction is a dict and field name of model to be used only
    #savePredictions.save()
    #newResult = ExercisePrediction.objects.latest('id') # get latest questionnaire
    #serialized_newResult = serializers.serialize('json', [ newResult, ]) # string json formmy_obj = json.loads(serialized_newResult.replace("'", '"') # convert to json obj
    #data=json.loads(serialized_newResult) # convert to json obj

    exercisePred = {'crunches' : CrunchesModel.predict(df)[0], 'jogging' : joggingModel.predict(df)[0], 'pullups' : PullUpsModel.predict(df)[0], 'pushups' : PushUpsModel.predict(df)[0], 'situps' : SitUpsModel.predict(df)[0], 'walking' : WalkingModel.predict(df)[0]}
    #print('The newResult', exercisePred)


    data = list()
    for ex in exercisePred:
        if exercisePred[ex] == 1:
            data.append(ex)
    print('The data', data)

            
    return JsonResponse({'ExercisePrediction':'success', 'prediction': data}) # the data need to be serialized to used at frontend/json else tyoe error


class ExercisePredictionViewSet(viewsets.ModelViewSet):
   # permission_classes = (IsAuthenticated)
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)
    #file = open('S:\FitEase\FiteaseServer\api\exercisePrediction\JoggingPipeline.pkl', 'rb')
     


    queryset = ExercisePrediction.objects.all().order_by('id')
    #m = ExercisePrediction(exercisePrediction={'situps':1,'hello':0})
    #m.save()
    

    serializer_class = ExercisePredictionSerializer

    

'''
    # Perfectly Working Second Method - But not able to get recent id
     df = pd.DataFrame(list(Questionnaire.objects.all().values()))
   # print(list(Questionnaire.objects.all().values()))
    print(list(Questionnaire.objects.filter(id='5').values())) #[{'id': 5, 'Name_id': None, 'Age': 22, 'Gender': 'Null', 'Weight': 80.0, 'Height': 5.11, 'Lifestyle': 'Null', 'Goal': 'Null', 'BMI': 0.0, 'BMR': 0.0, 'Calorie_Count': 0.0, 'created_at': datetime.date(2022, 3, 23), 'updated_at': datetime.date(2022, 3, 23)}]
    df = pd.DataFrame(list(Questionnaire.objects.filter(id='5').values('Age','Gender', 'Weight', 'Height', 'Lifestyle', 'Goal', 'BMI', 'BMR', 'Calorie_Count')))
    print(df)
    print(df.dtypes)
    model1= joblib.load('JoggingPipeline.pkl')

    print(model1.predict(df))
    # limit which fields
    #df = pd.DataFrame(list(BlogPost.objects.all().values('author', 'date', 'slug')))
    # First Method but dtype object error

'''
   
    #model1.predict(df)

    #df = pd.DataFrame(fields.items(), columns=['Age','Gender', 'Weight', 'Height', 'Lifestyle', 'Goal', 'BMI', 'BMR', 'Calorie_Count'])
    # Error : KeyError: "None of [Index(['Gender', 'Lifestyle', 'Goal'], dtype='object')] are in the [columns]"

   


'''
    new_keys = ['Age','Gender', 'Weight', 'Height', 'Lifestyle', 'Goal', 'BMI', 'BMR', 'Calorie_Count']
    print(fields) # returns the latest object

    fieldsList = list(fields.items())
    print(fieldsList) # returns
    arr_2d = np.array(fieldsList).transpose()
    print(arr_2d)
'''
    
    #df['Gender'] = df['Gender'].astype('object')
    #print(df)

   # model1.predict([[obj.Age,obj.Gender, obj.Weight, obj.Height, obj.Lifestyle, obj.Goal, obj.BMI, obj.BMR, obj.Calorie_Count]])
    #dataF=pd.DataFrame({fields})
    #model1.predict(new_2d_arr)

    



