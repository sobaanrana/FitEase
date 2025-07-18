from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from .models import CustomUser
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout
from rest_framework import permissions


from django.contrib.auth.hashers import check_password


from django.core import serializers


import json
import random
import re

# Create your views here. 

def generate_session_token(length=10):
    return ''.join(random.SystemRandom().choice([chr(i) for i in range(91,123)]+[str(i) for i in range(10)]) for _ in range(length))

@csrf_exempt
def signin(request):
    if not request.method == 'POST':
        return JsonResponse({'error' : 'Send a post request with valid parameters'})
    
    username = request.POST['email']
    password = request.POST['password']

    # validation part

    if not  re.match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",username):
        return JsonResponse({'error' : 'Enter a valid email'})
    
    if len(password) < 3:
        return JsonResponse({'error' : 'Password needs to be of at least 3 characters'})

    UserModel  = get_user_model()

    try:
        user = UserModel.objects.get(email = username)

        if user.check_password(password):
            usr_dict = UserModel.objects.filter(email = username).values().first()
            usr_dict.pop('password')

            if user.session_token != "0":
                user.session_token = "0"
                user.save()
                return JsonResponse({'error' : 'Previous session exists'})

            token = generate_session_token()
            user.session_token = token
            user.save()
            usr_dict['pass'] = password
            login(request, user)
            return JsonResponse({'token' : token , 'user': usr_dict})
        else:
            return JsonResponse({'error' : 'Invalid password'})
            
    except UserModel.DoesNotExist:
        return JsonResponse({'error' : 'Invalid Email' })


def signout(request, id):
    logout(request)

    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(pk=id)
        user.session_token = "0"
        user.save()
    except UserModel.DoesNotExist:
        return JsonResponse({'error' : 'Invalid user ID' })

    return JsonResponse({'success' : 'Logout success'})

@csrf_exempt
def forgotpassword(request):

    #print(request.META.get("email", ""))
    #print( request.headers['email'])

    # json_data = json.loads(str(request.body, encoding='utf-8'))
 
    #user = CustomUser.objects.latest('id')
    userEmail = json.loads(request.body)['email']
    user = CustomUser.objects.filter(email=userEmail) #request.headers['email']
    #print('user',user)
    if(user):
      serializedUser = serializers.serialize('json', [ user[0], ])
      #print('The serialized obj of a djanogo obj', serializedUser)
      userData=json.loads(serializedUser)
     # print(userData[0]['pk'])
      return JsonResponse({'user' : True,'id':userData[0]['pk'],'email':userEmail})
    return JsonResponse({'user' : False})

class UserViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)


    queryset = CustomUser.objects.all().order_by('id')
    serializer_class = UserSerializer

    def get_permission(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError:
            return [permission() for permission in self.permission_classes]