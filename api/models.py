from django.db import models
from django.contrib.auth.models import AbstractUser

# TODO: adicionar chaves estrangeiras referentes aos atletas e treinadores
# TODO: definir campos que podem ou não ser nulos
# TODO: testar os diferentes tamanhos de string para definir um tamanho adequado
# TODO: definir uma classe __str__(self) para os modelos serem exibidos de forma mais legível
# TODO: definir na ferramenta um padrão para essas medidas e outras
# TODO: nos atributos inteiros impedir números negativos e verificar qual inteiro o campo pode assumir
# TODO: verificar quais atributos podem ser nulos ou não
# TODO: avaliar a questão do auto_now e data de criação para melhor controle do banco de dados
# TODO: adicionar constraints para os Models, com os valores de range, max, min, entre outros
# TODO: verificar os built in validators dos Models
# TODO: adicionar default 0 para valores numericos
# TODO: definir kwargs: write_only para que os dados não aparecam
# TODO: verificar se um mesmo atleta está sendo cadastrado novamente
# TODO: definir campos unique para contato, nome, entre outros


class Treinador(models.Model):
    # o campo ID é default de qualquer model
    data_criacao = models.DateTimeField(auto_now=True, verbose_name='Data de Criação')

    nome_completo = models.CharField(max_length=100)
    email = models.EmailField(max_length=50)
    data_nascimento = models.DateField(verbose_name='Data de Nascimento')
    sexo = models.IntegerField()
    instituicao_clube = models.CharField(max_length=50, verbose_name="Instituição/Clube")
    pais = models.CharField(max_length=50)
    estado = models.CharField(max_length=50)
    cidade = models.CharField(max_length=50)
    senha = models.CharField(max_length=150)

    class Meta:
        db_table = 'treinador'

    def __str__(self):
        return self.nome_completo


class AtletaManager(models.Manager):
    def get_by_natural_key(self, nome_completo):
        return self.get(nome_completo=nome_completo)


class Atleta(models.Model):
    # o campo ID é padrão de qualquer model
    # treinador = models.ForeignKey(Treinador, default=None, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, verbose_name='Data de Criação')

    nome_completo = models.CharField(max_length=200, null=True, blank=True)
    data_nascimento = models.DateField(null=True, blank=True, verbose_name='Data de Nascimento')
    contato = models.CharField(max_length=15, null=True, blank=True)
    pais = models.CharField(max_length=50, null=True, blank=True)
    estado = models.CharField(max_length=50, null=True, blank=True)
    cidade = models.CharField(max_length=50, null=True, blank=True)
    sexo = models.IntegerField(null=True, blank=True)
    escolaridade = models.CharField(max_length=50, null=True, blank=True)
    tipo_escola = models.IntegerField(null=True, blank=True)
    repetente = models.BooleanField(null=True, blank=True)
    categoria_etaria = models.CharField(max_length=50, null=True, blank=True)
    posicao_jogo = models.CharField(max_length=50, null=True, blank=True)
    instituicao_clube = models.CharField(max_length=50, verbose_name="Instituição/Clube", null=True, blank=True)
    senha = models.CharField(max_length=150, null=True, blank=True)
    possui_deficiencia = models.BooleanField(null=True, blank=True)
    qual_deficiencia = models.CharField(max_length=50, null=True, blank=True)
    algum_problema_saude = models.BooleanField(null=True, blank=True)
    qual_problema_saude = models.CharField(max_length=50, null=True, blank=True)
    usa_medicamento_regularmente = models.BooleanField(null=True, blank=True)
    qual_medicamento = models.CharField(max_length=50, null=True, blank=True)
    qualidade_sono = models.PositiveIntegerField(null=True, blank=True)
    recuperacao_ao_acordar = models.PositiveIntegerField(null=True, blank=True)
    dominancia_maos = models.PositiveIntegerField(null=True, blank=True)
    dominancia_pes = models.PositiveIntegerField(null=True, blank=True)
    ja_teve_menarca = models.PositiveIntegerField(null=True, blank=True)
    idade_menarca = models.PositiveIntegerField(null=True, blank=True)
    # foto_perfil = models.FileField(null=True, blank=True)

    objects = AtletaManager()

    class Meta:
        db_table = 'atleta'

    def __str__(self):
        return self.nome_completo


class QuestionarioDadosPessoais(models.Model):
    # o campo ID é padrão de qualquer model
    atleta = models.ForeignKey(Atleta, default=None, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='Data de Criação')

    tem_orientacao_treinador = models.BooleanField(null=True, blank=True)
    qual_esporte_treina1 = models.CharField(max_length=50, null=True, blank=True)
    tempo_treinamento1 = models.IntegerField(null=True, blank=True)
    frequencia_semanal_treino1 = models.IntegerField(null=True, blank=True)
    duracao_treino_horas1 = models.IntegerField(null=True, blank=True)
    qual_esporte_treina2 = models.CharField(max_length=50, null=True, blank=True)
    tempo_treinamento2 = models.IntegerField(null=True, blank=True)
    frequencia_semanal_treino2 = models.IntegerField(null=True, blank=True)
    duracao_treino_horas2 = models.IntegerField(null=True, blank=True)
    instituicao_treinamento = models.CharField(max_length=50, null=True, blank=True)
    esporte_preferido = models.CharField(max_length=50, null=True, blank=True)
    idade_inicio_futebol = models.IntegerField(null=True, blank=True)
    participa_competicao = models.BooleanField(null=True, blank=True)
    maior_nivel_competicao = models.IntegerField(null=True, blank=True)
    nome_competicao = models.CharField(max_length=50, null=True, blank=True)
    maior_nivel_vitoria = models.IntegerField(null=True, blank=True)
    nome_competicao_maior_vitoria = models.CharField(max_length=50, null=True, blank=True)
    quer_ser_atleta = models.BooleanField(null=True, blank=True)
    modalidade = models.CharField(max_length=50, null=True, blank=True)
    teve_lesao = models.BooleanField(null=True, blank=True)
    quantas_lesoes = models.IntegerField(null=True, blank=True)

    class Meta:
        db_table = 'questionario_pessoal'


class QuestionarioInfoPaisSocieconomico(models.Model):
    # Questionário Socioeconomico e Questionario Informação dos Pais
    # o campo ID é padrão de qualquer model
    atleta = models.ForeignKey(Atleta, default=None, null=True, blank=True, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, verbose_name='Data de Criação')

    # Informacao dos Pais
    altura_mae = models.IntegerField(null=True, blank=True)
    altura_pai = models.IntegerField(null=True, blank=True)
    tem_atleta_na_familia = models.BooleanField(default=None, null=True, blank=True, )
    modalidade = models.CharField(max_length=50, default=None, null=True, blank=True, )
    pais_praticantes_esporte = models.BooleanField(default=None, null=True, blank=True, )

    class Meta:
        db_table = 'questionario_pais_socioeconomico'


class QuestionarioSOQ(models.Model):
    # Questionário Orientação Motivacional SOQ
    # o campo ID é padrão de qualquer model
    atleta = models.ForeignKey(Atleta, default=None, null=True, blank=True, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='Data de Criação')

    questao1 = models.IntegerField(default=None, null=True, blank=True,)
    questao2 = models.IntegerField(default=None, null=True, blank=True,)
    questao3 = models.IntegerField(default=None, null=True, blank=True,)
    questao4 = models.IntegerField(default=None, null=True, blank=True,)
    questao5 = models.IntegerField(default=None, null=True, blank=True,)
    questao6 = models.IntegerField(default=None, null=True, blank=True,)
    questao7 = models.IntegerField(default=None, null=True, blank=True,)
    questao8 = models.IntegerField(default=None, null=True, blank=True,)
    questao9 = models.IntegerField(default=None, null=True, blank=True,)
    questao10 = models.IntegerField(default=None, null=True, blank=True,)
    questao11 = models.IntegerField(default=None, null=True, blank=True,)
    questao12 = models.IntegerField(default=None, null=True, blank=True,)
    questao13 = models.IntegerField(default=None, null=True, blank=True,)
    questao14 = models.IntegerField(default=None, null=True, blank=True,)
    questao15 = models.IntegerField(default=None, null=True, blank=True,)
    questao16 = models.IntegerField(default=None, null=True, blank=True,)
    questao17 = models.IntegerField(default=None, null=True, blank=True,)
    questao18 = models.IntegerField(default=None, null=True, blank=True,)
    questao19 = models.IntegerField(default=None, null=True, blank=True,)
    questao20 = models.IntegerField(default=None, null=True, blank=True,)
    questao21 = models.IntegerField(default=None, null=True, blank=True,)
    questao22 = models.IntegerField(default=None, null=True, blank=True,)
    questao23 = models.IntegerField(default=None, null=True, blank=True,)
    questao24 = models.IntegerField(default=None, null=True, blank=True,)
    questao25 = models.IntegerField(default=None, null=True, blank=True,)

    class Meta:
        db_table = 'questionario_soq'


class QuestionarioCompPercebidaSuporteFamiliar(models.Model):
    # Questionários de Competência percebida e Suporte Familiar
    # o campo ID é padrão de qualquer model
    atleta = models.ForeignKey(Atleta, default=None, null=True, blank=True, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='Data de Criação')

    # Competencia Percebida
    desempenho_percebido = models.IntegerField(default=None, null=True, blank=True,)
    desempenho_comparativo = models.IntegerField(default=None, null=True, blank=True,)

    # Suporte Familiar
    questao1 = models.IntegerField(default=None, null=True, blank=True,)
    questao2 = models.IntegerField(default=None, null=True, blank=True,)
    questao3 = models.IntegerField(default=None, null=True, blank=True,)
    questao4 = models.IntegerField(default=None, null=True, blank=True,)
    questao5 = models.IntegerField(default=None, null=True, blank=True,)
    questao6 = models.IntegerField(default=None, null=True, blank=True,)
    questao7 = models.IntegerField(default=None, null=True, blank=True,)
    questao8 = models.IntegerField(default=None, null=True, blank=True,)
    questao9 = models.IntegerField(default=None, null=True, blank=True,)
    questao10 = models.IntegerField(default=None, null=True, blank=True,)

    class Meta:
        db_table = 'questionario_competencia_suporte_familiar'


class QuestionarioACSI(models.Model):
    # Questionário Habilidades de Coping (ACSI)
    # o campo ID é padrão de qualquer model
    atleta = models.ForeignKey(Atleta, default=None, null=True, blank=True, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='Data de Criação')

    questao1 = models.IntegerField(default=None, null=True, blank=True,)
    questao2 = models.IntegerField(default=None, null=True, blank=True,)
    questao3 = models.IntegerField(default=None, null=True, blank=True,)
    questao4 = models.IntegerField(default=None, null=True, blank=True,)
    questao5 = models.IntegerField(default=None, null=True, blank=True,)
    questao6 = models.IntegerField(default=None, null=True, blank=True,)
    questao7 = models.IntegerField(default=None, null=True, blank=True,)
    questao8 = models.IntegerField(default=None, null=True, blank=True,)
    questao9 = models.IntegerField(default=None, null=True, blank=True,)
    questao10 = models.IntegerField(default=None, null=True, blank=True,)
    questao11 = models.IntegerField(default=None, null=True, blank=True,)
    questao12 = models.IntegerField(default=None, null=True, blank=True,)
    questao13 = models.IntegerField(default=None, null=True, blank=True,)
    questao14 = models.IntegerField(default=None, null=True, blank=True,)
    questao15 = models.IntegerField(default=None, null=True, blank=True,)
    questao16 = models.IntegerField(default=None, null=True, blank=True,)
    questao17 = models.IntegerField(default=None, null=True, blank=True,)
    questao18 = models.IntegerField(default=None, null=True, blank=True,)
    questao19 = models.IntegerField(default=None, null=True, blank=True,)
    questao20 = models.IntegerField(default=None, null=True, blank=True,)
    questao21 = models.IntegerField(default=None, null=True, blank=True,)
    questao22 = models.IntegerField(default=None, null=True, blank=True,)
    questao23 = models.IntegerField(default=None, null=True, blank=True,)
    questao24 = models.IntegerField(default=None, null=True, blank=True,)
    questao25 = models.IntegerField(default=None, null=True, blank=True,)
    questao26 = models.IntegerField(default=None, null=True, blank=True,)
    questao27 = models.IntegerField(default=None, null=True, blank=True,)
    # questao28 = models.IntegerField(default=None, null=True, blank=True,)

    class Meta:
        db_table = 'questionario_acsi'


class QuestionarioTACSI(models.Model):
    # Questionário Habilidades de Táticas (TACSIS)
    # o campo ID é padrão de qualquer model
    atleta = models.ForeignKey(Atleta, default=None, null=True, blank=True, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, verbose_name='Data de Criação')

    questao1 = models.IntegerField(default=0, null=True, blank=True,)
    questao2 = models.IntegerField(default=0, null=True, blank=True,)
    questao3 = models.IntegerField(default=0, null=True, blank=True,)
    questao4 = models.IntegerField(default=0, null=True, blank=True,)
    questao5 = models.IntegerField(default=0, null=True, blank=True,)
    questao6 = models.IntegerField(default=0, null=True, blank=True,)
    questao7 = models.IntegerField(default=0, null=True, blank=True,)
    questao8 = models.IntegerField(default=0, null=True, blank=True,)
    questao9 = models.IntegerField(default=0, null=True, blank=True,)
    questao10 = models.IntegerField(default=0, null=True, blank=True,)
    questao11 = models.IntegerField(default=0, null=True, blank=True,)
    questao12 = models.IntegerField(default=0, null=True, blank=True,)
    questao13 = models.IntegerField(default=0, null=True, blank=True,)
    questao14 = models.IntegerField(default=0, null=True, blank=True,)
    questao15 = models.IntegerField(default=0, null=True, blank=True,)
    questao16 = models.IntegerField(default=0, null=True, blank=True,)
    questao17 = models.IntegerField(default=0, null=True, blank=True,)
    questao18 = models.IntegerField(default=0, null=True, blank=True,)
    questao19 = models.IntegerField(default=0, null=True, blank=True,)
    questao20 = models.IntegerField(default=0, null=True, blank=True,)
    questao21 = models.IntegerField(default=0, null=True, blank=True,)
    questao22 = models.IntegerField(default=0, null=True, blank=True,)
    questao23 = models.IntegerField(default=0, null=True, blank=True,)
    questao24 = models.IntegerField(default=0, null=True, blank=True,)
    questao25 = models.IntegerField(default=0, null=True, blank=True,)
    questao26 = models.IntegerField(default=0, null=True, blank=True,)
    questao27 = models.IntegerField(default=0, null=True, blank=True,)
    questao28 = models.IntegerField(default=0, null=True, blank=True,)
    questao29 = models.IntegerField(default=0, null=True, blank=True,)
    questao30 = models.IntegerField(default=0, null=True, blank=True,)
    questao31 = models.IntegerField(default=0, null=True, blank=True,)
    questao32 = models.IntegerField(default=0, null=True, blank=True,)
    questao33 = models.IntegerField(default=0, null=True, blank=True,)
    questao34 = models.IntegerField(default=0, null=True, blank=True,)
    questao35 = models.IntegerField(default=0, null=True, blank=True,)
    questao36 = models.IntegerField(default=0, null=True, blank=True,)

    class Meta:
        db_table = 'questionario_tacsi'

    def __str__(self):
        return "Questionário TACSI"


class AvaliacaoAntropometricaFisicomotora(models.Model):
    atleta = models.ForeignKey(
        Atleta,
        default=None,
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name='av_antropometrica_fisicomotora'
    )
    treinador = models.ForeignKey(Treinador, default=None, null=True, blank=True, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, null=True, verbose_name='Data de Criação')

    massa_corporal = models.FloatField(default=0, null=True, blank=True,)
    estatura = models.FloatField(default=0, null=True, blank=True,)
    altura_sentado = models.FloatField(default=0, null=True, blank=True,)
    envergadura = models.FloatField(default=0, null=True, blank=True,)
    dc_triciptal = models.FloatField(default=0, null=True, blank=True,)
    dc_perna = models.FloatField(default=0, null=True, blank=True,)
    flexibilidade_t1 = models.FloatField(default=0, null=True, blank=True,)
    flexibilidade_t2 = models.FloatField(default=0, null=True, blank=True,)
    flexibilidade_t3 = models.FloatField(default=0, null=True, blank=True,)
    preensao_manual_t1 = models.FloatField(default=0, null=True, blank=True,)
    preensao_manual_t2 = models.FloatField(default=0, null=True, blank=True,)
    preensao_manual_t3 = models.FloatField(default=0, null=True, blank=True,)
    salto_vertical_t1 = models.FloatField(default=0, null=True, blank=True,)
    salto_vertical_t2 = models.FloatField(default=0, null=True, blank=True,)
    salto_vertical_t3 = models.FloatField(default=0, null=True, blank=True,)
    velocidade_10m_t1 = models.FloatField(default=0, null=True, blank=True,)
    velocidade_10m_t2 = models.FloatField(default=0, null=True, blank=True,)
    velocidade_20m_t1 = models.FloatField(default=0, null=True, blank=True,)
    velocidade_20m_t2 = models.FloatField(default=0, null=True, blank=True,)
    agilidade_t1 = models.FloatField(default=0, null=True, blank=True,)
    agilidade_t2 = models.FloatField(default=0, null=True, blank=True,)
    drible_t1 = models.FloatField(default=0, null=True, blank=True,)
    drible_t2 = models.FloatField(default=0, null=True, blank=True,)



    class Meta:
        db_table = 'avaliacao_antropometrica_fisicomotora'


class AvaliacaoAerobica(models.Model):
    atleta = models.ForeignKey(Atleta, default=None, on_delete=models.CASCADE)
    treinador = models.ForeignKey(Treinador, default=None, null=True, blank=True, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='Data de Criação')

    estagio = models.IntegerField(default=None, null=True, blank=True,)
    volta = models.IntegerField(default=None, null=True, blank=True,)

    class Meta:
        db_table = 'avaliacao_aerobica'


class AvaliacaoPotencialEsportivo(models.Model):
    atleta = models.ForeignKey(Atleta, default=None, on_delete=models.CASCADE, related_name='av_potencial_esportivo')
    treinador = models.ForeignKey(Treinador, default=None, null=True, blank=True, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='Data de Criação')

    potencial_futuro = models.IntegerField(default=0, null=True, blank=True,)
    modalidade_futura = models.CharField(max_length=50, default=None, null=True, blank=True,)
    posicao_futura = models.CharField(max_length=50, default=None, null=True, blank=True,)

    class Meta:
        db_table = 'avaliacao_potencial_esportivo'


class AvaliacaoAspectosIntangiveis(models.Model):
    atleta = models.ForeignKey(Atleta, default=None, null=True, blank=True, on_delete=models.CASCADE)
    treinador = models.ForeignKey(Treinador, default=None, null=True, blank=True, on_delete=models.CASCADE)
    data_criacao = models.DateTimeField(auto_now=True, null=True, blank=True, verbose_name='Data de Criação')

    questao1 = models.IntegerField(default=None, null=True, blank=True,)
    questao2 = models.IntegerField(default=None, null=True, blank=True,)
    questao3 = models.IntegerField(default=None, null=True, blank=True,)
    questao4 = models.IntegerField(default=None, null=True, blank=True,)
    questao5 = models.IntegerField(default=None, null=True, blank=True,)
    questao6 = models.IntegerField(default=None, null=True, blank=True,)
    questao7 = models.IntegerField(default=None, null=True, blank=True,)
    questao8 = models.IntegerField(default=None, null=True, blank=True,)
    questao9 = models.IntegerField(default=None, null=True, blank=True,)
    questao10 = models.IntegerField(default=None, null=True, blank=True,)

    class Meta:
        db_table = 'avaliacao_aspectos_intangiveis'
