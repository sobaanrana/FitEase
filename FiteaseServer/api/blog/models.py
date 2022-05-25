from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.




category_choices = (
    ('fitness','Fitness'),
    ('health', 'Health'),
    ('diet','Diet'),
    ('workout','Workout'),
    ('sports','Sports'),
    ('event','Event'),
)
class Blog(models.Model):
    title = models.CharField(max_length = 50)
    description = RichTextField(max_length = 5000) 
   
    author = models.CharField(max_length =100)
    views = models.IntegerField(default = 0)
   # category  = models.ForeignKey(Category, on_delete = models.SET_NULL, blank = True, null=True )
    category = models.CharField(max_length=20, choices=category_choices, default='Fitness')
    image = models.ImageField(upload_to = 'images/',blank = True, null=True)

    created_at = models.DateField(auto_now_add=True, auto_created = True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
    