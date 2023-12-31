# Generated by Django 4.1.1 on 2023-02-27 18:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_alter_questionariodadospessoais_maior_nivel_vitoria'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avaliacaopotencialesportivo',
            name='data_criacao',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Data de Criação'),
        ),
        migrations.AlterField(
            model_name='avaliacaopotencialesportivo',
            name='modalidade_futura',
            field=models.CharField(blank=True, default=None, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaopotencialesportivo',
            name='posicao_futura',
            field=models.CharField(blank=True, default=None, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaopotencialesportivo',
            name='potencial_futuro',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaopotencialesportivo',
            name='treinador',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.treinador'),
        ),
    ]
