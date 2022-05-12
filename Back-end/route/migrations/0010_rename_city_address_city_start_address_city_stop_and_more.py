# Generated by Django 4.0.3 on 2022-04-28 06:32

from django.db import migrations, models
import location_field.models.plain


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0009_alter_manager_phone_number_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='address',
            old_name='city',
            new_name='city_start',
        ),
        migrations.AddField(
            model_name='address',
            name='city_stop',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='address',
            name='location1',
            field=location_field.models.plain.PlainLocationField(default='', max_length=63),
        ),
    ]