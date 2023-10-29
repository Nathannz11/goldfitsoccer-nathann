# Generated by Django 4.1.1 on 2023-02-25 02:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_questionariocomppercebidasuportefamiliar_data_criacao'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='atleta',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.atleta'),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='data_criacao',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Data de Criação'),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='treinador',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.treinador'),
        ),
    ]
