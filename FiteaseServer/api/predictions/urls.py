from rest_framework import routers
from django.urls import path,include
from . import views 
from .views import exercisePrediction
from .views import dietPrediction


router = routers.DefaultRouter()
router.register(r'', views.PredictionViewSet)

urlpatterns = [
    path('exercise-prediction/',exercisePrediction, name='api.predictions.exercisePrediction'),
    path('diet-prediction/',dietPrediction, name='api.predictions.dietPrediction'),
    path('',include(router.urls)),

]     