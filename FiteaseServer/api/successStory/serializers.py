from rest_framework import serializers
from .models import SuccessStory

class SuccessStorySerializer(serializers.HyperlinkedModelSerializer):
    #image = serializers.ImageField(max_length=None, allow_empty_file = False, allow_null = True, required = False)
    class Meta:
        model = SuccessStory
        fields = ('title','description', 'author', 'email','created_at', 'updated_at') # ,'image' , category