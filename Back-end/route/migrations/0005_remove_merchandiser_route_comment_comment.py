# Generated by Django 4.0.3 on 2022-04-27 21:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0004_rename_routes_address'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='merchandiser',
            name='route',
        ),
        migrations.AddField(
            model_name='comment',
            name='comment',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='route.address'),
        ),
    ]