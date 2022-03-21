from django.db import migrations
from api.user.models import CustomUser

class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(first_name = "rana", last_name= "sobaan", email = "sobaan@gmail.com", is_staff = True, is_superuser = True, phone = "0300000000", gender = "Male")

        user.set_password("sobaan")
        user.save()

    dependencies = [

    ] 

    operations = [
        migrations.RunPython(seed_data),
    ]