from rest_framework import routers
from django.urls import path,include
from . import views 
from .views import results

router = routers.DefaultRouter()
router.register(r'', views.ExercisePredictionViewSet)

urlpatterns = [
    path('results/',results, name='api.exercisePrediction.results'),
    path('',include(router.urls)),

]     