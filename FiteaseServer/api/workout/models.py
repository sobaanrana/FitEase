from django.db import models
# Create your models here.

class Workout(models.Model):
    name = models.CharField(max_length = 100)
    description = models.CharField(max_length = 5000) 
    image = models.CharField(max_length =200)

    created_at = models.DateField(auto_now_add=True, auto_created = True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.name
    