from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import BlogSerializer
from .models import Blog

# Create your views here.
class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by('id')
    serializer_class = BlogSerializer
