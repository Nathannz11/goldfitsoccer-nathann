from django.contrib import admin
from django.urls import path, include
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

urlpatterns = [
    # ATENCAO: não mexer na rota admin
    path('admin/', admin.site.urls),

    # importa as rotas da App API do projeto
    path('api/', include('api.urls')),

    # inclui a URL de documentação da API
    path('api-auth/', include('rest_framework.urls'))
]
