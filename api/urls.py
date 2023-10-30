from django.urls import path
from api import views
from rest_framework.urlpatterns import format_suffix_patterns

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = {
    # URLS de Autenticação
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # URLS da classe Atleta
    path('atleta/view/', views.AtletaView.as_view()),
    path('atleta/', views.get_post_atleta),
    path('atleta/<int:id>', views.get_put_delete_atleta),
    path('atleta/<int:id>/av_antropometrica_fisicomotora', views.get_av_antropometrica_fisicomotora_atleta),
    path('atleta/<int:id>/gold_score', views.get_gold_score),
    path('atleta/<int:id>/potencial_esportivo', views.get_potencial_esportivo),

    # URLS da classe Treinador
    path('treinador/view/', views.TreinadorView.as_view()),
    path('treinador/', views.get_post_treinador),
    path('treinador/<int:id>', views.get_put_delete_treinador),

    # URLS da classe Questionario de Dados Pessoais
    path('qdados_pessoais/view/', views.QuestionarioDadosPessoaisView.as_view()),
    path('qdados_pessoais/', views.get_post_qdados_pessoais),
    path('qdados_pessoais/<int:id>', views.get_put_delete_qdados_pessoais),

    # URLS da classe Questionário Socioeconomico e Informação dos Pais
    path('qinfo_pais_socioeconomico/view/', views.QuestionarioInfoPaisSocieconomicoView.as_view()),
    path('qinfo_pais_socioeconomico/', views.get_post_qinfo_pais_socioeconomico),
    path('qinfo_pais_socioeconomico/<int:id>', views.get_put_delete_qinfo_pais_socioeconomico),

    # URLS da classe Questionário Orientação Motivacional SOQ
    path('qsoq/view/', views.QuestionarioSOQView.as_view()),
    path('qsoq/', views.get_post_qsoq),
    path('qsoq/<int:id>', views.get_put_delete_qsoq),

    # URLS da classe Questionário Orientação Motivacional SOQ
    path('qcompetencia_suporte/view/', views.QuestionarioCompPercebidaSuporteFamiliarView.as_view()),
    path('qcompetencia_suporte/', views.get_post_qcompetencia_suporte),
    path('qcompetencia_suporte/<int:id>', views.get_put_delete_qcompetencia_suporte),

    # URLS da classe Questionário de Habilidades de Coping (ACSI)
    path('qacsi/view/', views.QuestionarioACSIView.as_view()),
    path('qacsi/', views.get_post_qacsi),
    path('qacsi/<int:id>', views.get_put_delete_qacsi),

    # URLS da classe Questionário Habilidades de Táticas (TACSIS)
    path('qtacsi/view/', views.QuestionarioTACSIView.as_view()),
    path('qtacsi/', views.get_post_qtacsi),
    path('qtacsi/<int:id>', views.get_put_delete_qtacsi),

    # URLS da classe da Avaliacao Antropometrica Fisicomotora
    path('av_antropometrica_fisicomotora/view/', views.AvaliacaoAntropometricaFisicomotoraView.as_view()),
    path('av_antropometrica_fisicomotora/', views.get_post_av_antropometrica_fisicomotora),
    path('av_antropometrica_fisicomotora/<int:id>', views.get_put_delete_av_antropometrica_fisicomotora),

    # URLS da classe da Avaliacao Aerobica
    path('av_aerobica/view/', views.AvaliacaoAerobicaView.as_view()),
    path('av_aerobica/', views.get_post_av_aerobica),
    path('av_aerobica/<int:id>', views.get_put_delete_av_aerobica),

    # URLS da classe da Avaliacao de Potencial Esportivo
    path('av_potencial_esportivo/view/', views.AvaliacaoPotencialEsportivoView.as_view()),
    path('av_potencial_esportivo/', views.get_post_av_potencial_esportivo),
    path('av_potencial_esportivo/<int:id>', views.get_put_delete_av_potencial_esportivo),

    # URLS da classe da Aspectos Intangiveis
    path('av_aspectos_intangiveis/view/', views.AvaliacaoAspectosIntangiveisView.as_view()),
    path('av_aspectos_intangiveis/', views.get_post_av_asepctos_intangiveis),
    path('av_aspectos_intangiveis/<int:id>', views.get_put_delete_av_asepctos_intangiveis),
}

# Essa função permite que os dados sejam retornados em diferentes formatos de dados
urlpatterns = format_suffix_patterns(urlpatterns)
