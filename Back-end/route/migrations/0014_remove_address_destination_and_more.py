# Generated by Django 4.0.3 on 2022-04-28 06:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0013_address_destination_address_final_location'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='address',
            name='destination',
        ),
        migrations.RemoveField(
            model_name='address',
            name='final_location',
        ),
    ]
