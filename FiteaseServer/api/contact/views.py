from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import ContactSerializer
from .models import Contact

from rest_framework import permissions
from rest_framework.permissions import AllowAny

# Create your views here.
class ContactViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = { 'create' : [AllowAny]}
    permission_classes = (permissions.AllowAny,)
    queryset = Contact.objects.all().order_by('id')
    serializer_class = ContactSerializer
