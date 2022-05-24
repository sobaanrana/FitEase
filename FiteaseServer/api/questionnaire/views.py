from django.shortcuts import render
from rest_framework import viewsets
from .serializers import QuestionnaireSerializer
from .models import Questionnaire
from rest_framework.permissions import IsAuthenticated
#from rest_framework.permissions import AllowAny, IsAdminUser
#from rest_framework.exceptions import PermissionDenied
from rest_framework import permissions
from rest_framework.permissions import AllowAny

from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
from django.http import JsonResponse
import json

from api.user.models import CustomUser


@csrf_exempt
def getDataByEmail(request):
   # Getting input parameters from Questionnaire related to this email
   user = CustomUser.objects.exclude(session_token=0)
   if(user):
      serializedUser = serializers.serialize('json', [ user[0], ])
      #print('The serialized obj of a djanogo obj', serializedUser)
      userData=json.loads(serializedUser)
      userEmail = userData[0]['fields']['email']

      questionnaire = Questionnaire.objects.filter(user=userEmail)
      serializedQues = serializers.serialize('json', [ questionnaire[0], ])
      print('The serialized obj of a djanogo obj', serializedQues)
      quesData=json.loads(serializedQues)

   else: 
      return JsonResponse({'error':'No User Logged In'})  
   return JsonResponse({'questionnaire':quesData[0]}) # the data need to be serialized to used at frontend/json else tyoe error

# Create your views here.
class QuestionnaireViewSet(viewsets.ModelViewSet):
   # permission_classes = (IsAuthenticated)
    #permission_classes_by_action = (AllowAny)
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)

    queryset = Questionnaire.objects.all() #.order_by('id')
    serializer_class = QuestionnaireSerializer

   