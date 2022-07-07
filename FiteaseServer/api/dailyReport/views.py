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

from api.user.models import CustomUser

import json

# Create your views here.
@csrf_exempt
def msg(request):
    # Getting input parameters from Questionnaire related to this email
    user = CustomUser.objects.exclude(session_token=0)
    print('user',user)
    if(user):
      serializedUser = serializers.serialize('json', [ user[0], ])
      #print('The serialized obj of a djanogo obj', serializedUser)
      userData=json.loads(serializedUser)
      userEmail = userData[0]['fields']['email']


    DailyReports = list()

    # getting all the instances related this email
    objects_all=DailyReport.objects.filter(user=userEmail)
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
        #print('DailyReports',msgDict)
    return JsonResponse({'Message' : msgDict}) # the data need to be serialized to used at frontend/json else tyoe error


class DailyReportViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)

    queryset =  DailyReport.objects.all() #.order_by('id')
    serializer_class =  DailyReportSerializer

   