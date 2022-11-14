from rest_framework import routers
from .api import CategoryViewSet, RecipeViewSet

router = routers.DefaultRouter()
router.register('categories', CategoryViewSet, 'categories')
router.register('recipes', RecipeViewSet, 'recipes')

urlpatterns = router.urls


