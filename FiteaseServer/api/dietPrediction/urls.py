from rest_framework import routers
from django.urls import path,include
from . import views 
#from .views import WeightGain
#from .views import WeightLoss
from .views import results
router = routers.DefaultRouter()
router.register(r'', views.DietPredictionViewSet)

urlpatterns = [
    #path('weight-loss/',WeightLoss, name='api.dietPrediction.WeightLoss'),
    #path('weight-gain/',WeightGain, name='api.dietPrediction.WeightGain'),
    path('results/',results, name='api.dietPrediction.results'),
    path('',include(router.urls)),

]     