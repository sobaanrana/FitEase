# Generated by Django 3.2.11 on 2022-03-18 12:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20220318_1551'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='name',
            new_name='title',
        ),
    ]
