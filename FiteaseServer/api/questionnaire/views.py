from django.shortcuts import render
from rest_framework import viewsets
from .serializers import QuestionnaireSerializer
from .models import Questionnaire
from rest_framework.permissions import IsAuthenticated
#from rest_framework.permissions import AllowAny, IsAdminUser
#from rest_framework.exceptions import PermissionDenied
from rest_framework import permissions
from rest_framework.permissions import AllowAny

# Create your views here.
class QuestionnaireViewSet(viewsets.ModelViewSet):
   # permission_classes = (IsAuthenticated)
    #permission_classes_by_action = (AllowAny)
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)

    queryset = Questionnaire.objects.all() #.order_by('id')
    serializer_class = QuestionnaireSerializer

   