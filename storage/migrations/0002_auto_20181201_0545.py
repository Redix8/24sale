# Generated by Django 2.1.3 on 2018-11-30 20:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('storage', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='store',
            field=models.CharField(choices=[('CU', 'CU'), ('GS', 'GS25'), ('SV', 'SEVEN ELEVEN')], max_length=2),
        ),
    ]
