# Generated by Django 4.1.1 on 2023-02-25 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_alter_questionariocomppercebidasuportefamiliar_atleta_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questionariocomppercebidasuportefamiliar',
            name='data_criacao',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Data de Criação'),
        ),
    ]
