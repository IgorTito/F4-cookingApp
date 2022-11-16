from .models import Category, Recipe
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer, RecipeSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CategorySerializer

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RecipeSerializer