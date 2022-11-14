from django.db import models


class Category(models.Model):
    category = models.CharField(max_length=32)

    class Meta():
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        return self.category


class Recipe(models.Model):
    catId = models.ForeignKey("Category", on_delete=models.CASCADE)
    name = models.CharField(max_length=64)
    text = models.CharField(max_length=64)

    class Meta():
        verbose_name = "Рецепт"
        verbose_name_plural = "Рецепты"

    def __str__(self):
        return self.name

