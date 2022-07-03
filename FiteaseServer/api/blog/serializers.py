from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.ImageField(max_length=None, allow_empty_file = False, allow_null = True, required = False)
    class Meta:
        model = Blog
        fields = ('id','title','description', 'author', 'views','image', 'category','created_at', 'updated_at') # ,'image' , category