# Generated by Django 4.1.1 on 2023-02-07 01:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_questionariosoq_atleta'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questionarioacsi',
            name='atleta',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.atleta'),
        ),
    ]
