# Generated by Django 4.1.1 on 2023-01-31 02:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Atleta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('nome_completo', models.CharField(max_length=100)),
                ('data_nascimento', models.DateField(verbose_name='Data de Nascimento')),
                ('contato', models.CharField(max_length=15)),
                ('pais', models.CharField(max_length=50)),
                ('estado', models.CharField(max_length=50)),
                ('cidade', models.CharField(max_length=50)),
                ('sexo', models.IntegerField()),
                ('escolaridade', models.CharField(max_length=50)),
                ('tipo_escola', models.IntegerField()),
                ('repetente', models.BooleanField()),
                ('categoria_etaria', models.CharField(max_length=50)),
                ('posicao_jogo', models.CharField(max_length=50)),
                ('instituicao_clube', models.CharField(max_length=50, verbose_name='Instituição/Clube')),
                ('senha', models.CharField(max_length=150)),
                ('possui_deficiencia', models.BooleanField()),
                ('qual_deficiencia', models.CharField(max_length=50)),
                ('algum_problema_saude', models.BooleanField()),
                ('qual_problema_saude', models.CharField(max_length=50)),
                ('usa_medicamento_regularmente', models.BooleanField()),
                ('qual_medicamento', models.CharField(max_length=50)),
                ('qualidade_sono', models.PositiveIntegerField()),
                ('recuperacao_ao_acordar', models.PositiveIntegerField()),
                ('dominancia_maos', models.PositiveIntegerField()),
                ('dominancia_pes', models.PositiveIntegerField()),
                ('ja_teve_menarca', models.PositiveIntegerField()),
                ('idade_menarca', models.PositiveIntegerField()),
            ],
            options={
                'db_table': 'atleta',
            },
        ),
        migrations.CreateModel(
            name='Treinador',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('nome_completo', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=50)),
                ('data_nascimento', models.DateField(verbose_name='Data de Nascimento')),
                ('sexo', models.IntegerField()),
                ('instituicao_clube', models.CharField(max_length=50, verbose_name='Instituição/Clube')),
                ('pais', models.CharField(max_length=50)),
                ('estado', models.CharField(max_length=50)),
                ('cidade', models.CharField(max_length=50)),
                ('senha', models.CharField(max_length=150)),
            ],
            options={
                'db_table': 'treinador',
            },
        ),
        migrations.CreateModel(
            name='QuestionarioTACSI',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('questao1', models.IntegerField()),
                ('questao2', models.IntegerField()),
                ('questao3', models.IntegerField()),
                ('questao4', models.IntegerField()),
                ('questao5', models.IntegerField()),
                ('questao6', models.IntegerField()),
                ('questao7', models.IntegerField()),
                ('questao8', models.IntegerField()),
                ('questao9', models.IntegerField()),
                ('questao10', models.IntegerField()),
                ('questao11', models.IntegerField()),
                ('questao12', models.IntegerField()),
                ('questao13', models.IntegerField()),
                ('questao14', models.IntegerField()),
                ('questao15', models.IntegerField()),
                ('questao16', models.IntegerField()),
                ('questao17', models.IntegerField()),
                ('questao18', models.IntegerField()),
                ('questao19', models.IntegerField()),
                ('questao20', models.IntegerField()),
                ('questao21', models.IntegerField()),
                ('questao22', models.IntegerField()),
                ('atleta', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.atleta')),
            ],
            options={
                'db_table': 'questionario_tacsi',
            },
        ),
        migrations.CreateModel(
            name='QuestionarioSOQ',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('questao1', models.IntegerField()),
                ('questao2', models.IntegerField()),
                ('questao3', models.IntegerField()),
                ('questao4', models.IntegerField()),
                ('questao5', models.IntegerField()),
                ('questao6', models.IntegerField()),
                ('questao7', models.IntegerField()),
                ('questao8', models.IntegerField()),
                ('questao9', models.IntegerField()),
                ('questao10', models.IntegerField()),
                ('questao11', models.IntegerField()),
                ('questao12', models.IntegerField()),
                ('questao13', models.IntegerField()),
                ('questao14', models.IntegerField()),
                ('questao15', models.IntegerField()),
                ('questao16', models.IntegerField()),
                ('questao17', models.IntegerField()),
                ('questao18', models.IntegerField()),
                ('questao19', models.IntegerField()),
                ('questao20', models.IntegerField()),
                ('questao21', models.IntegerField()),
                ('questao22', models.IntegerField()),
                ('questao23', models.IntegerField()),
                ('questao24', models.IntegerField()),
                ('questao25', models.IntegerField()),
                ('atleta', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.atleta')),
            ],
            options={
                'db_table': 'questionario_soq',
            },
        ),
        migrations.CreateModel(
            name='QuestionarioInfoPaisSocieconomico',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('altura_mae', models.IntegerField()),
                ('altura_pai', models.IntegerField()),
                ('questao1', models.IntegerField()),
                ('questao2', models.IntegerField()),
                ('questao3', models.IntegerField()),
                ('questao4', models.IntegerField()),
                ('questao5', models.IntegerField()),
                ('questao6', models.IntegerField()),
                ('questao7', models.IntegerField()),
                ('questao8', models.IntegerField()),
                ('questao9', models.IntegerField()),
                ('questao10', models.IntegerField()),
                ('questao11', models.IntegerField()),
                ('questao12', models.IntegerField()),
                ('questao13', models.IntegerField()),
                ('questao14', models.IntegerField()),
                ('escolaridade_pessoa_referencia', models.CharField(max_length=50)),
                ('atleta', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.atleta')),
            ],
            options={
                'db_table': 'questionario_pais_socioeconomico',
            },
        ),
        migrations.CreateModel(
            name='QuestionarioDadosPessoais',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('tem_orientacao_treinador', models.BooleanField()),
                ('qual_esporte_treina1', models.CharField(max_length=50)),
                ('tempo_treinamento1', models.IntegerField()),
                ('frequencia_semanal_treino1', models.IntegerField()),
                ('duracao_treino_horas1', models.IntegerField()),
                ('qual_esporte_treina2', models.CharField(max_length=50)),
                ('tempo_treinamento2', models.IntegerField()),
                ('frequencia_semanal_treino2', models.IntegerField()),
                ('duracao_treino_horas2', models.IntegerField()),
                ('instituicao_treinamento', models.CharField(max_length=50)),
                ('esporte_preferido', models.CharField(max_length=50)),
                ('idade_inicio_futebol', models.IntegerField()),
                ('participa_competicao', models.BooleanField()),
                ('maior_nivel_competicao', models.BooleanField()),
                ('nome_competicao', models.CharField(max_length=50)),
                ('maior_nivel_vitoria', models.BooleanField()),
                ('nome_competicao_maior_vitoria', models.CharField(max_length=50)),
                ('quer_ser_atleta', models.BooleanField()),
                ('modalidade', models.CharField(max_length=50)),
                ('teve_lesao', models.BooleanField()),
                ('quantas_lesoas', models.IntegerField()),
                ('atleta', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.atleta')),
            ],
            options={
                'db_table': 'questionario_pessoal',
            },
        ),
        migrations.CreateModel(
            name='QuestionarioCompPercebidaSuporteFamiliar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('desempenho_percebido', models.IntegerField()),
                ('desempenho_comparativo', models.IntegerField()),
                ('tem_atleta_na_familia', models.BooleanField()),
                ('modalidade', models.CharField(max_length=50)),
                ('pais_praticantes_esporte', models.BooleanField()),
                ('questao1', models.IntegerField()),
                ('questao2', models.IntegerField()),
                ('questao3', models.IntegerField()),
                ('questao4', models.IntegerField()),
                ('questao5', models.IntegerField()),
                ('questao6', models.IntegerField()),
                ('questao7', models.IntegerField()),
                ('questao8', models.IntegerField()),
                ('questao9', models.IntegerField()),
                ('questao10', models.IntegerField()),
                ('atleta', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.atleta')),
            ],
            options={
                'db_table': 'questionario_competencia_suporte_familiar',
            },
        ),
        migrations.CreateModel(
            name='QuestionarioACSI',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('questao1', models.IntegerField()),
                ('questao2', models.IntegerField()),
                ('questao3', models.IntegerField()),
                ('questao4', models.IntegerField()),
                ('questao5', models.IntegerField()),
                ('questao6', models.IntegerField()),
                ('questao7', models.IntegerField()),
                ('questao8', models.IntegerField()),
                ('questao9', models.IntegerField()),
                ('questao10', models.IntegerField()),
                ('questao11', models.IntegerField()),
                ('questao12', models.IntegerField()),
                ('questao13', models.IntegerField()),
                ('questao14', models.IntegerField()),
                ('questao15', models.IntegerField()),
                ('questao16', models.IntegerField()),
                ('questao17', models.IntegerField()),
                ('questao18', models.IntegerField()),
                ('questao19', models.IntegerField()),
                ('questao20', models.IntegerField()),
                ('questao21', models.IntegerField()),
                ('questao22', models.IntegerField()),
                ('questao23', models.IntegerField()),
                ('questao24', models.IntegerField()),
                ('questao25', models.IntegerField()),
                ('questao26', models.IntegerField()),
                ('questao27', models.IntegerField()),
                ('questao28', models.IntegerField()),
                ('atleta', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.atleta')),
            ],
            options={
                'db_table': 'questionario_acsi',
            },
        ),
        migrations.CreateModel(
            name='AvaliacaoPotencialEsportivo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('potencial_futuro', models.IntegerField()),
                ('modalidade_futura', models.CharField(max_length=50)),
                ('posicao_futura', models.CharField(max_length=50)),
                ('atleta', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.atleta')),
                ('treinador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.treinador')),
            ],
            options={
                'db_table': 'avaliacao_potencial_esportivo',
            },
        ),
        migrations.CreateModel(
            name='AvaliacaoAspectosIntangiveis',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('questao1', models.IntegerField()),
                ('questao2', models.IntegerField()),
                ('questao3', models.IntegerField()),
                ('questao4', models.IntegerField()),
                ('questao5', models.IntegerField()),
                ('questao6', models.IntegerField()),
                ('questao7', models.IntegerField()),
                ('questao8', models.IntegerField()),
                ('questao9', models.IntegerField()),
                ('questao10', models.IntegerField()),
                ('atleta', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.atleta')),
                ('treinador', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.treinador')),
            ],
            options={
                'db_table': 'avaliacao_aspectos_intangiveis',
            },
        ),
        migrations.CreateModel(
            name='AvaliacaoAntropometricaFisicomotora',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('massa_corpotal', models.IntegerField()),
                ('estatura', models.IntegerField()),
                ('altura_sentado', models.IntegerField()),
                ('envergadura', models.IntegerField()),
                ('dc_triciptal', models.IntegerField()),
                ('dc_perna', models.IntegerField()),
                ('flexibilidade_t1', models.IntegerField()),
                ('flexibilidade_t2', models.IntegerField()),
                ('flexibilidade_t3', models.IntegerField()),
                ('preensao_manual_t1', models.IntegerField()),
                ('preensao_manual_t2', models.IntegerField()),
                ('preensao_manual_t3', models.IntegerField()),
                ('salto_vertical_t1', models.IntegerField()),
                ('salto_vertical_t2', models.IntegerField()),
                ('salto_vertical_t3', models.IntegerField()),
                ('velocidade_10m_t1', models.IntegerField()),
                ('velocidade_10m_t2', models.IntegerField()),
                ('velocidade_20m_t1', models.IntegerField()),
                ('velocidade_20m_t2', models.IntegerField()),
                ('agilidade_t1', models.IntegerField()),
                ('agilidade_t2', models.IntegerField()),
                ('drible_t1', models.IntegerField()),
                ('drible_t2', models.IntegerField()),
                ('atleta', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.atleta')),
                ('treinador', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.treinador')),
            ],
            options={
                'db_table': 'avaliacao_antropometrica_fisicomotora',
            },
        ),
        migrations.CreateModel(
            name='AvaliacaoAerobica',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_criacao', models.DateTimeField(auto_now=True, verbose_name='Data de Criação')),
                ('estagio', models.IntegerField()),
                ('volta', models.IntegerField()),
                ('atleta', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.atleta')),
                ('treinador', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.treinador')),
            ],
            options={
                'db_table': 'avaliacao_aerobica',
            },
        ),
        migrations.AddField(
            model_name='atleta',
            name='treinador',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.treinador'),
        ),
    ]
