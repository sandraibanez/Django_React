# Generated by Django 5.0.1 on 2024-01-24 18:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stations', '0005_alter_bicis_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bicis',
            name='slug',
            field=models.CharField(editable=False, max_length=255, unique=True),
        ),
    ]
