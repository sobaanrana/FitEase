from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DailyReportSerializer
from .models import DailyReport
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
from rest_framework.permissions import AllowAny

# Create your views here.
class DailyReportViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)

    queryset =  DailyReport.objects.all() #.order_by('id')
    serializer_class =  DailyReportSerializer

   