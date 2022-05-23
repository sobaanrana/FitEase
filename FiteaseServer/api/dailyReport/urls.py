from rest_framework import routers
from django.urls import path,include
from . import views 
from .views import msg

router = routers.DefaultRouter()
router.register(r'', views.DailyReportViewSet)

urlpatterns = [
    path('msg/',msg, name='api.dailyReport.msg'),
    path('',include(router.urls)),

]     