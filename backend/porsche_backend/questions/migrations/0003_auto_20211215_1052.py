# Generated by Django 3.2.10 on 2021-12-15 10:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('questions', '0002_auto_20211215_1039'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='research',
            name='assigned_user',
        ),
        migrations.AddField(
            model_name='research',
            name='assigned_user',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='users.user'),
            preserve_default=False,
        ),
    ]
