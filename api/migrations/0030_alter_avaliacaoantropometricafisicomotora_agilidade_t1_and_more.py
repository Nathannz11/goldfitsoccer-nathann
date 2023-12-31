# Generated by Django 4.2.1 on 2023-05-29 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0029_avaliacaoantropometricafisicomotora_habilidades_psicologicas_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='agilidade_t1',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='agilidade_t2',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='altura_sentado',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='dc_perna',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='dc_triciptal',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='drible_t1',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='drible_t2',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='envergadura',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='estatura',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='flexibilidade_t1',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='flexibilidade_t2',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='flexibilidade_t3',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='habilidades_psicologicas',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='habilidades_taticas',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='massa_corporal',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='preensao_manual_t1',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='preensao_manual_t2',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='preensao_manual_t3',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='resistencia',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='salto_vertical_t1',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='salto_vertical_t2',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='salto_vertical_t3',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='suporte_familiar',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='velocidade_10m_t1',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='velocidade_10m_t2',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='velocidade_20m_t1',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='avaliacaoantropometricafisicomotora',
            name='velocidade_20m_t2',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
    ]
