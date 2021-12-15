# Generated by Django 3.2.10 on 2021-12-15 10:39

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('questions', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='qnaire',
            name='assigned_user',
        ),
        migrations.CreateModel(
            name='Research',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('assigned_user', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
                ('q_naire', models.ManyToManyField(to='questions.QNaire')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
