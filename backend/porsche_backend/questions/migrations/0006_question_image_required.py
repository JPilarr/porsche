# Generated by Django 3.2.10 on 2021-12-15 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0005_alter_research_q_naire'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='image_required',
            field=models.BooleanField(default=False),
        ),
    ]
