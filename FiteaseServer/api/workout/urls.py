from rest_framework import routers
from django.urls import path,include
from . import views 

router = routers.DefaultRouter()
router.register(r'', views.WorkoutViewSet)

urlpatterns = [
    path('',include(router.urls))
]     