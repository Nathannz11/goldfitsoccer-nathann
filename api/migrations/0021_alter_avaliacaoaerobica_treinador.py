# Generated by Django 4.1.1 on 2023-02-27 14:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_alter_avaliacaoaerobica_data_criacao'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avaliacaoaerobica',
            name='treinador',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.treinador'),
        ),
    ]
