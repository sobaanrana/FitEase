from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import WorkoutSerializer
from .models import Workout

from rest_framework import permissions
from rest_framework.permissions import AllowAny

# Create your views here.
class WorkoutViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)
    queryset = Workout.objects.all().order_by('id')
    serializer_class = WorkoutSerializer
