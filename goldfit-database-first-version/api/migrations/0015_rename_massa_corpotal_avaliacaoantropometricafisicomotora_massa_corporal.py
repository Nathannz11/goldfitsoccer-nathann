# Generated by Django 4.1.1 on 2023-02-27 13:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_alter_avaliacaoantropometricafisicomotora_agilidade_t1_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='avaliacaoantropometricafisicomotora',
            old_name='massa_corpotal',
            new_name='massa_corporal',
        ),
    ]
