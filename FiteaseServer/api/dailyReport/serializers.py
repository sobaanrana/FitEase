from rest_framework import serializers
from .models import DailyReport

class DailyReportSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = DailyReport
        fields = ('msg','created_at','updated_at')

     