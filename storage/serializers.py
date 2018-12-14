from rest_framework import serializers
from .models import Product


class StorageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'product_name',
            'price',
            'store',
            'img_url',
            'sale'
        )

