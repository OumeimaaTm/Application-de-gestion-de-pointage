# Generated by Django 4.0.3 on 2022-05-05 18:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('EmployeApp', '0002_rename_deviceid_devices_devicenum_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='devices',
            old_name='Description',
            new_name='Details',
        ),
    ]
