# Generated by Django 4.2.1 on 2023-05-27 19:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='created',
        ),
        migrations.RemoveField(
            model_name='note',
            name='updated',
        ),
    ]
