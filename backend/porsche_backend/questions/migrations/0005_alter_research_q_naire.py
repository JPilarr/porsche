# Generated by Django 3.2.10 on 2021-12-15 11:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0004_auto_20211215_1056'),
    ]

    operations = [
        migrations.AlterField(
            model_name='research',
            name='q_naire',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='q_naire', to='questions.qnaire'),
        ),
    ]