from django.urls import include
from django.contrib import admin
from django.urls import path
from rest_framework.schemas import get_schema_view
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='cookingApp')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('cookingApp.urls')),
    # path('openapi/', get_schema_view(
    #     title='Cooking project',
    #     description='API schema for queries'
    # )),
    path('swagger/', schema_view)
]
