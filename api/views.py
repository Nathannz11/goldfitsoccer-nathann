from rest_framework import generics
from api.models import *
from api.serializers import *
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
import math
# TODO: separar atletas de acordo com o treinador que o cadastrou
# TODO: adicionar o filtro de atleta por usuario, para que tenha acesso apenas aos seus atletas cadastrados

# A IDE acusa que object não existe mas, isso ocorre pois o Django tem suporte apenas na versão paga do PyCharm
# A IDE acusa que o atributo formart não é utilizado, mas permite que os dados sejam retornados como JSON


# -------------------- View Class Django RestFramework ------------------------------------
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class AtletaView(generics.CreateAPIView):
    queryset = Atleta.objects.all
    serializer_class = SerializadorAtleta


class TreinadorView(generics.CreateAPIView):
    queryset = Treinador.objects.all
    serializer_class = SerializadorTreinador


class QuestionarioDadosPessoaisView(generics.CreateAPIView):
    queryset = QuestionarioDadosPessoais.objects.all
    serializer_class = SerializadorQDadosPessoais


class QuestionarioInfoPaisSocieconomicoView(generics.CreateAPIView):
    queryset = QuestionarioInfoPaisSocieconomico.objects.all
    serializer_class = SerializadorQInfoPaisSocieconomico


class QuestionarioSOQView(generics.CreateAPIView):
    queryset = QuestionarioSOQ.objects.all
    serializer_class = SerializadorQSOQ


class QuestionarioCompPercebidaSuporteFamiliarView(generics.CreateAPIView):
    queryset = QuestionarioCompPercebidaSuporteFamiliar.objects.all
    serializer_class = SerializadorQCompPercebidaSuporteFamiliar


class QuestionarioACSIView(generics.CreateAPIView):
    queryset = QuestionarioACSI.objects.all
    serializer_class = SerializadorQACSI


class QuestionarioTACSIView(generics.CreateAPIView):
    queryset = QuestionarioTACSI.objects.all
    serializer_class = SerializadorQTACSI


class AvaliacaoAntropometricaFisicomotoraView(generics.CreateAPIView):
    queryset = AvaliacaoAntropometricaFisicomotora.objects.all
    serializer_class = SerializadorAvAntropometricaFisicomotora


class AvaliacaoAerobicaView(generics.CreateAPIView):
    queryset = AvaliacaoAerobica.objects.all
    serializer_class = SerializadorAvAerobica


class AvaliacaoPotencialEsportivoView(generics.CreateAPIView):
    queryset = AvaliacaoPotencialEsportivo.objects.all
    serializer_class = SerializadorAvPotencialEsportivo


class AvaliacaoAspectosIntangiveisView(generics.CreateAPIView):
    queryset = AvaliacaoAspectosIntangiveis.objects.all
    serializer_class = SerializadorAvAspectosIntangiveis


# ------------------------- Views do Atleta ------------------------------------
@ensure_csrf_cookie
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_atleta(request, format=None):
    if request.method == 'GET':
        lista_atletas = Atleta.objects.all()
        serializador = SerializadorAtleta(lista_atletas, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorAtleta(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_atleta(request, id, format=None):
    try:
        atleta = Atleta.objects.get(pk=id)
    except Atleta.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorAtleta(atleta)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorAtleta(atleta, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        atleta.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_av_antropometrica_fisicomotora_atleta(request, id, format=None):
    try:
        if request.method == 'GET':
            atleta = Atleta.objects.get(pk=id)
            avaliacao = atleta.av_antropometrica_fisicomotora.all()[0]
            serializador = SerializadorAvAntropometricaFisicomotora(avaliacao)

            return Response(serializador.data, status=status.HTTP_200_OK)
    except Atleta.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

# TODO: adicionar método para pegar a avaliação mais recente de determinado atleta
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_gold_score(request, id, format=None):
    try:
        if request.method == 'GET':
            data = {
                "gold_score": 0,
                "probabilidade_sucesso": 0
            }

            atleta = Atleta.objects.get(pk=id)
            avaliacao_antropometrica_fisicomotora = atleta.av_antropometrica_fisicomotora.all()
            avaliacao_potencial_esportivo = atleta.av_potencial_esportivo.all()

            if avaliacao_antropometrica_fisicomotora.exists() and avaliacao_potencial_esportivo.exists():
                avaliacao_antropometrica_fisicomotora = atleta.av_antropometrica_fisicomotora.all()[0]
                avaliacao_potencial_esportivo = atleta.av_potencial_esportivo.all()[0]

                ht = avaliacao_antropometrica_fisicomotora.habilidades_taticas
                mt = avaliacao_antropometrica_fisicomotora.motivacao
                sf = avaliacao_antropometrica_fisicomotora.suporte_familiar
                ag = avaliacao_antropometrica_fisicomotora.agilidade_t1
                ra = avaliacao_antropometrica_fisicomotora.resistencia
                db = avaliacao_antropometrica_fisicomotora.drible_t1
                pvc = avaliacao_antropometrica_fisicomotora.idade_pvc

                intg = avaliacao_potencial_esportivo.intangivel_potencial_esportivo
                pe = avaliacao_potencial_esportivo.potencial_futuro

                ad = atleta.dominancia_pes

                if ad == 3:
                    ad = 1
                else:
                    ad = 0

                gold_score = (2 * ht + mt + sf + 5 * intg + 2 * pe + 2 * ag + 3 * ra + 3 * db) / 19
                escore_logistico = pow(math.e, (-23.825 + 0.163 * gold_score + 1.664 * ad + 0.872 * pvc))
                probabilidade_sucesso = escore_logistico / (1 + escore_logistico)

                data = {
                    "gold_score": gold_score,
                    "probabilidade_sucesso": probabilidade_sucesso
                }

            return Response(data, status=status.HTTP_200_OK)
    except Atleta.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_potencial_esportivo(request, id, format=None):
    try:
        if request.method == 'GET':
            atleta = Atleta.objects.get(pk=id)
            print(atleta)

            avaliacao = atleta.av_antropometrica_fisicomotora.all()[0]
            print(avaliacao)

            serializador = SerializadorAvAntropometricaFisicomotora(avaliacao)
            print(avaliacao)
            return Response(serializador.data, status=status.HTTP_200_OK)
    except Atleta.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


# ------------------------- Views do Treinador ------------------------------------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_treinador(request, format=None):
    if request.method == 'GET':
        lista_treinadores = Treinador.objects.all()
        serializador = SerializadorTreinador(lista_treinadores, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorTreinador(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_treinador(request, id, format=None):
    try:
        treinador = Treinador.objects.get(pk=id)
    except Treinador.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorTreinador(treinador)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorTreinador(treinador, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        treinador.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# --------------- Views do Questionario de Dados Pessoais --------------------------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_qdados_pessoais(request, format=None):
    if request.method == 'GET':
        lista_qdados_pessoais = QuestionarioDadosPessoais.objects.all()
        serializador = SerializadorQDadosPessoais(lista_qdados_pessoais, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorQDadosPessoais(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_qdados_pessoais(request, id, format=None):
    try:
        qdados_pessoais = QuestionarioDadosPessoais.objects.get(pk=id)
    except QuestionarioDadosPessoais.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorQDadosPessoais(qdados_pessoais)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorQDadosPessoais(qdados_pessoais, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        qdados_pessoais.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# --------- Views do Questionário Socioeconomico e Informação dos Pais -------------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_qinfo_pais_socioeconomico(request, format=None):
    if request.method == 'GET':
        lista_qinfo_pais_socioeconomico = QuestionarioInfoPaisSocieconomico.objects.all()
        serializador = SerializadorQInfoPaisSocieconomico(lista_qinfo_pais_socioeconomico, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorQInfoPaisSocieconomico(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_qinfo_pais_socioeconomico(request, id, format=None):
    try:
        qinfo_pais_socioeconomico = QuestionarioInfoPaisSocieconomico.objects.get(pk=id)
    except QuestionarioInfoPaisSocieconomico.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorQInfoPaisSocieconomico(qinfo_pais_socioeconomico)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorQInfoPaisSocieconomico(qinfo_pais_socioeconomico, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        qinfo_pais_socioeconomico.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# -------------- Views do Questionário Orientação Motivacional SOQ ----------------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_qsoq(request, format=None):
    if request.method == 'GET':
        lista_qsoq = QuestionarioSOQ.objects.all()
        serializador = SerializadorQSOQ(lista_qsoq, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorQSOQ(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_qsoq(request, id, format=None):
    try:
        qsoq = QuestionarioSOQ.objects.get(pk=id)
    except QuestionarioSOQ.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorQSOQ(qsoq)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorQSOQ(qsoq, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        qsoq.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ------ Views do Questionário de Competência percebida e Suporte Familiar -----------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_qcompetencia_suporte(request, format=None):
    if request.method == 'GET':
        lista_qcompetencia_suporte = QuestionarioCompPercebidaSuporteFamiliar.objects.all()
        serializador = SerializadorQCompPercebidaSuporteFamiliar(lista_qcompetencia_suporte, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorQCompPercebidaSuporteFamiliar(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_qcompetencia_suporte(request, id, format=None):
    try:
        qcompetencia_suporte = QuestionarioCompPercebidaSuporteFamiliar.objects.get(pk=id)
    except QuestionarioCompPercebidaSuporteFamiliar.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorQCompPercebidaSuporteFamiliar(qcompetencia_suporte)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorQCompPercebidaSuporteFamiliar(qcompetencia_suporte, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        qcompetencia_suporte.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# -------------- Views do Questionário Habilidades de Coping (ACSI) -----------------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_qacsi(request, format=None):
    if request.method == 'GET':
        lista_qacsi = QuestionarioACSI.objects.all()
        serializador = SerializadorQACSI(lista_qacsi, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorQACSI(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_qacsi(request, id, format=None):
    try:
        qacsi = QuestionarioACSI.objects.get(pk=id)
    except QuestionarioACSI.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorQACSI(qacsi)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorQACSI(qacsi, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        qacsi.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# -------------- Views do Questionário Habilidades de Táticas (TACSIS) -----------------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_qtacsi(request, format=None):
    if request.method == 'GET':
        lista_qtacsi = QuestionarioTACSI.objects.all()
        serializador = SerializadorQTACSI(lista_qtacsi, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorQTACSI(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_qtacsi(request, id, format=None):
    try:
        qtacsi = QuestionarioTACSI.objects.get(pk=id)
    except QuestionarioTACSI.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorQTACSI(qtacsi)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorQTACSI(qtacsi, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        qtacsi.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ------------------ Views da Avaliacao Antropometrica Fisicomotora ---------------------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_av_antropometrica_fisicomotora(request, format=None):
    if request.method == 'GET':
        lista_av_antropometrica_fisicomotora = AvaliacaoAntropometricaFisicomotora.objects.all()
        serializador = SerializadorAvAntropometricaFisicomotora(lista_av_antropometrica_fisicomotora, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorAvAntropometricaFisicomotora(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_av_antropometrica_fisicomotora(request, id, format=None):
    try:
        av_antropometrica_fisicomotora = AvaliacaoAntropometricaFisicomotora.objects.get(pk=id)
    except AvaliacaoAntropometricaFisicomotora.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorAvAntropometricaFisicomotora(av_antropometrica_fisicomotora)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorAvAntropometricaFisicomotora(av_antropometrica_fisicomotora, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        av_antropometrica_fisicomotora.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ------------------ Views da Avaliacao Aerobica ---------------------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_av_aerobica(request, format=None):
    if request.method == 'GET':
        lista_av_aerobica = AvaliacaoAerobica.objects.all()
        serializador = SerializadorAvAerobica(lista_av_aerobica, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorAvAerobica(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_av_aerobica(request, id, format=None):
    try:
        av_aerobica = AvaliacaoAerobica.objects.get(pk=id)
    except AvaliacaoAerobica.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorAvAerobica(av_aerobica)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorAvAerobica(av_aerobica, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        av_aerobica.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ------------------ Views da Avaliacao de Potencial Esportivo ---------------------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_av_potencial_esportivo(request, format=None):
    if request.method == 'GET':
        lista_av_potencial_esportivo = AvaliacaoPotencialEsportivo.objects.all()
        serializador = SerializadorAvPotencialEsportivo(lista_av_potencial_esportivo, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorAvPotencialEsportivo(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_av_potencial_esportivo(request, id, format=None):
    try:
        av_potencial_esportivo = AvaliacaoPotencialEsportivo.objects.get(pk=id)
    except AvaliacaoPotencialEsportivo.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorAvPotencialEsportivo(av_potencial_esportivo)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorAvPotencialEsportivo(av_potencial_esportivo, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        av_potencial_esportivo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# ------------------ Views da Aspectos Intangiveis ---------------------
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_post_av_asepctos_intangiveis(request, format=None):
    if request.method == 'GET':
        lista_av_asepctos_intangiveis = AvaliacaoAspectosIntangiveis.objects.all()
        serializador = SerializadorAvAspectosIntangiveis(lista_av_asepctos_intangiveis, many=True)
        return Response(serializador.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializador = SerializadorAvAspectosIntangiveis(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def get_put_delete_av_asepctos_intangiveis(request, id, format=None):
    try:
        av_asepctos_intangiveis = AvaliacaoAspectosIntangiveis.objects.get(pk=id)
    except AvaliacaoAspectosIntangiveis.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializador = SerializadorAvAspectosIntangiveis(av_asepctos_intangiveis)
        return Response(serializador.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializador = SerializadorAvPotencialEsportivo(av_asepctos_intangiveis, data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        av_asepctos_intangiveis.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
