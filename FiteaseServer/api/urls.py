from django.urls import path,include
from rest_framework.authtoken import views
from .views import home

urlpatterns = [
    path('',home, name='api.home'),
    path('user/', include('api.user.urls')),
    path('blogs/', include('api.blog.urls')),
    path('workouts/', include('api.workout.urls')),
    path('contact/', include('api.contact.urls')),
    path('questionnaire/', include('api.questionnaire.urls')),
    path('exercise-prediction/', include('api.exercisePrediction.urls')),
    path('diet-prediction/', include('api.dietPrediction.urls')),
    path('prediction/', include('api.predictions.urls')),
    path('daily-report/', include('api.dailyReport.urls')),
    path('success-story/', include('api.successStory.urls')),
    path('api-token-auth/', views.obtain_auth_token, name='api_token_auth')  # this generate token based on email and password nut will not use it as we are doing own custom session 
]