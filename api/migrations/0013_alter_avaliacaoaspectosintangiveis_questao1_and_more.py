# Generated by Django 4.1.1 on 2023-02-25 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_alter_avaliacaoaspectosintangiveis_atleta_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='questao1',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='questao10',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='questao2',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='questao3',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='questao4',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='questao5',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='questao6',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='questao7',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='questao8',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoaspectosintangiveis',
            name='questao9',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
    ]
