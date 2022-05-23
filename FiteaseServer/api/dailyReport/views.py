from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DailyReportSerializer
from .models import DailyReport
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
from rest_framework.permissions import AllowAny

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers

import json

# Create your views here.
@csrf_exempt
def msg(request):
    #print("REQUEST", request)
   # obj = DailyReport.objects.get(user='sobaan@gmail.com') #user=request.user #gets single 

    # user email will be the latest instance email as he has just submitted the daily report and then get the msg repsons
    dataValues = list()
    obj = DailyReport.objects.latest('id') # get latest questionnaire
    #print('The obj direct for django table', obj)

    serialized_objDR = serializers.serialize('json', [ obj, ])
    data=json.loads(serialized_objDR)
    #print('The serialized obj of a djanogo obj', serialized_objDR)


    for key, value in data[0].items():
        dataValues.append(value)
   # print('The dataValues', dataValues) # to extract fields from django obj

    fields = dataValues[2] # field obj at index 2
    # Removing unwanted fields
    email = fields['user'] # get user id
    #print('The email', email) # fields) # to extract fields from


    DailyReports = list()

    # getting all the instances related this email
    objects_all=DailyReport.objects.filter(user=email)
    for obj in objects_all: 
        serialized_obj = serializers.serialize('json', [obj, ])
        DailyReports.append(json.loads(serialized_obj))
    #print('The serialized obj of all the object with particualr email', DailyReports)

    msgDict = {'Appreciate' : 0, 'Motivate' : 0 , 'Warn': 0}
    for ins in DailyReports:
        #print(ins[0]['fields']['msg'])
        if ins[0]['fields']['msg'] == 'Appreciate':
            msgDict[ins[0]['fields']['msg']] += 1
        
        if ins[0]['fields']['msg'] == 'Motivate':
            msgDict[ins[0]['fields']['msg']] += 1
        
        if ins[0]['fields']['msg'] == 'Warn':
            msgDict[ins[0]['fields']['msg']] += 1
        
    return JsonResponse({'Message' : msgDict}) # the data need to be serialized to used at frontend/json else tyoe error


class DailyReportViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)

    queryset =  DailyReport.objects.all() #.order_by('id')
    serializer_class =  DailyReportSerializer

   