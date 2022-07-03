from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import SuccessStorySerializer
from .models import SuccessStory

from rest_framework import permissions
from rest_framework.permissions import AllowAny


# Create your views here.
class SuccessStoryViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)
    queryset = SuccessStory.objects.all().order_by('id')
    serializer_class = SuccessStorySerializer
