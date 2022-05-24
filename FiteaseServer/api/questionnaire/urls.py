from rest_framework import routers
from django.urls import path,include
from . import views 
from .views import getDataByEmail
router = routers.DefaultRouter()
router.register(r'', views.QuestionnaireViewSet)

urlpatterns = [
    path('by-email/',getDataByEmail, name='api.questionnaire.getDataByEmail'),

    path('',include(router.urls))
]     