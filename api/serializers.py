from rest_framework import serializers
from api.models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


# TODO: verificar se substituir '__all__' no campo fields funciona
# Neste arquivo os serializadores são criados
# Os serializadores são responsáveis pelas conversões entre JSON e objetos do Python


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['id'] = user.id
        # ...

        return token


class SerializadorAtleta(serializers.ModelSerializer):
    class Meta:
        model = Atleta
        fields = '__all__'


class SerializadorTreinador(serializers.ModelSerializer):
    class Meta:
        model = Treinador
        fields = [
            'id',
            'data_criacao',
            'nome_completo',
            'email',
            'data_nascimento',
            'sexo',
            'instituicao_clube',
            'pais',
            'estado',
            'cidade',
            'senha',
        ]


class SerializadorQDadosPessoais(serializers.ModelSerializer):
    class Meta:
        model = QuestionarioDadosPessoais
        fields = [
            'id',
            'atleta',
            'data_criacao',
            'tem_orientacao_treinador',
            'qual_esporte_treina1',
            'tempo_treinamento1',
            'frequencia_semanal_treino1',
            'duracao_treino_horas1',
            'qual_esporte_treina2',
            'tempo_treinamento2',
            'frequencia_semanal_treino2',
            'duracao_treino_horas2',
            'instituicao_treinamento',
            'esporte_preferido',
            'idade_inicio_futebol',
            'participa_competicao',
            'maior_nivel_competicao',
            'nome_competicao',
            'maior_nivel_vitoria',
            'nome_competicao_maior_vitoria',
            'quer_ser_atleta',
            'modalidade',
            'teve_lesao',
            'quantas_lesoes',
        ]


class SerializadorQInfoPaisSocieconomico(serializers.ModelSerializer):
    class Meta:
        model = QuestionarioInfoPaisSocieconomico
        fields = '__all__'


class SerializadorQSOQ(serializers.ModelSerializer):
    class Meta:
        model = QuestionarioSOQ
        fields = [
            'id',
            'data_criacao',
            'questao1',
            'questao2',
            'questao3',
            'questao4',
            'questao5',
            'questao6',
            'questao7',
            'questao8',
            'questao9',
            'questao10',
            'questao11',
            'questao12',
            'questao13',
            'questao14',
            'questao15',
            'questao16',
            'questao17',
            'questao18',
            'questao19',
            'questao20',
            'questao21',
            'questao22',
            'questao23',
            'questao24',
            'questao25'
        ]


class SerializadorQCompPercebidaSuporteFamiliar(serializers.ModelSerializer):
    class Meta:
        model = QuestionarioCompPercebidaSuporteFamiliar
        fields = [
            'data_criacao',
            'desempenho_percebido',
            'desempenho_comparativo',
            'questao1',
            'questao2',
            'questao3',
            'questao4',
            'questao5',
            'questao6',
            'questao7',
            'questao8',
            'questao9',
            'questao10'
        ]


class SerializadorQACSI(serializers.ModelSerializer):
    class Meta:
        model = QuestionarioACSI
        fields = '__all__'


class SerializadorQTACSI(serializers.ModelSerializer):
    class Meta:
        model = QuestionarioTACSI
        fields = [
            'id',
            'data_criacao',
            'questao1',
            'questao2',
            'questao3',
            'questao4',
            'questao5',
            'questao6',
            'questao7',
            'questao8',
            'questao9',
            'questao10',
            'questao11',
            'questao12',
            'questao13',
            'questao14',
            'questao15',
            'questao16',
            'questao17',
            'questao18',
            'questao19',
            'questao20',
            'questao21',
            'questao22'
        ]


class SerializadorAvAntropometricaFisicomotora(serializers.ModelSerializer):
    class Meta:
        model = AvaliacaoAntropometricaFisicomotora
        fields = '__all__'


class SerializadorAvAerobica(serializers.ModelSerializer):
    class Meta:
        model = AvaliacaoAerobica
        fields = [
            'id',
            'atleta',
            'data_criacao',
            'estagio',
            'volta'
        ]


class SerializadorAvPotencialEsportivo(serializers.ModelSerializer):
    class Meta:
        model = AvaliacaoPotencialEsportivo
        fields = "__all__"


class SerializadorAvAspectosIntangiveis(serializers.ModelSerializer):
    class Meta:
        model = AvaliacaoAspectosIntangiveis
        fields = [
            'id',
            'data_criacao',
            'questao1',
            'questao2',
            'questao3',
            'questao4',
            'questao5',
            'questao6',
            'questao7',
            'questao8',
            'questao9',
            'questao10'
        ]
