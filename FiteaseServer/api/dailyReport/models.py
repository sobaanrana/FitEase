from django.db import models
from api.user.models import CustomUser

# Create your models here.

class DailyReport(models.Model):
    user = models.EmailField(max_length=254)
    msg = models.CharField(max_length=200)
    created_at = models.DateField(auto_now_add=True, auto_created = True)
    updated_at = models.DateField(auto_now=True)
