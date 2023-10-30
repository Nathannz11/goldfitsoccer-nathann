from django.contrib import admin
from api.models import *

# Neste arquivo as tabelas criadas são registradas na página administrativa do Django
# Caso a tabela não seja registrada, mesmo que criada, não será exibida


# A classe ModelAdmin define a forma que os objetos de uma tabela são exibidos na página de admin
class AtletaAdmin(admin.ModelAdmin):
    list_display = ('nome_completo', 'data_nascimento', 'instituicao_clube', 'data_criacao')
    list_filter = ('nome_completo', 'instituicao_clube',)


class TreinadorAdmin(admin.ModelAdmin):
    list_display = ('nome_completo', 'data_nascimento', 'instituicao_clube', 'data_criacao')
    list_filter = ('nome_completo', 'instituicao_clube',)


class DadosPessoaisAdmin(admin.ModelAdmin):
    list_display = ('atleta', 'data_criacao',)


class InfoPaisSocieconomicoAdmin(admin.ModelAdmin):
    list_display = ('atleta', 'data_criacao',)


class SOQAdmin(admin.ModelAdmin):
    list_display = ('atleta', 'data_criacao',)


class CompPercebidaSuporteFamiliarAdmin(admin.ModelAdmin):
    list_display = ('atleta', 'data_criacao',)


class ACSIAdmin(admin.ModelAdmin):
    list_display = ('atleta', 'data_criacao',)


class TCASISAdmin(admin.ModelAdmin):
    list_display = ('atleta', 'data_criacao',)


class AvaliacaoAerobicaAdmin(admin.ModelAdmin):
    list_display = ('atleta', 'treinador', 'data_criacao',)


class AvaliacaoAntropometricaFisicomotoraAdmin(admin.ModelAdmin):
    list_display = ('atleta', 'treinador', 'data_criacao',)


class AvaliacaoAspectosIntangiveisAdmin(admin.ModelAdmin):
    list_display = ('atleta', 'treinador', 'data_criacao',)


class AvaliacaoPotencialEsportivoAdmin(admin.ModelAdmin):
    list_display = ('atleta', 'treinador', 'data_criacao',)


# Registro das classes na página de admin
admin.site.register(Atleta, AtletaAdmin)
admin.site.register(Treinador, TreinadorAdmin)
admin.site.register(QuestionarioDadosPessoais, DadosPessoaisAdmin)
admin.site.register(QuestionarioInfoPaisSocieconomico, InfoPaisSocieconomicoAdmin)
admin.site.register(QuestionarioSOQ, SOQAdmin)
admin.site.register(QuestionarioCompPercebidaSuporteFamiliar, CompPercebidaSuporteFamiliarAdmin)
admin.site.register(QuestionarioACSI, ACSIAdmin)
admin.site.register(QuestionarioTACSI, TCASISAdmin)
admin.site.register(AvaliacaoAerobica, AvaliacaoAerobicaAdmin)
admin.site.register(AvaliacaoAntropometricaFisicomotora, AvaliacaoAntropometricaFisicomotoraAdmin)
admin.site.register(AvaliacaoAspectosIntangiveis, AvaliacaoAspectosIntangiveisAdmin)
admin.site.register(AvaliacaoPotencialEsportivo, AvaliacaoPotencialEsportivoAdmin)
