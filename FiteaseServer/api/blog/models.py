from django.db import models
#from ckeditor.fields import RichTextField
# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length = 50)
    description = models.TextField(max_length = 1000) 
    #Policy = RichTextField()

    image = models.ImageField(upload_to = 'images/',blank = True, null=True)
   # category  = models.ForeignKey(Category, on_delete = models.SET_NULL, blank = True, null=True )
    category = models.CharField(max_length = 50, blank = True, null=True)

    created_at = models.DateField(auto_now_add=True, auto_created = True)
    updated_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
    