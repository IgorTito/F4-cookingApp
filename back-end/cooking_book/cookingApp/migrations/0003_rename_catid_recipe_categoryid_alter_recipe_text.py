# Generated by Django 4.1.3 on 2022-11-16 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cookingApp', '0002_rename_category_category_categoryname'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipe',
            old_name='catId',
            new_name='categoryId',
        ),
        migrations.AlterField(
            model_name='recipe',
            name='text',
            field=models.CharField(max_length=500),
        ),
    ]
