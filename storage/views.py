from django.shortcuts import render
from rest_framework import generics

from .models import Product
from .serializers import StorageSerializer

# Create your views here.


class Items(generics.ListAPIView):
    serializer_class = StorageSerializer

    def get_queryset(self):
        store = self.kwargs['store']
        sale = self.kwargs['sale']
        return Product.objects.filter(store=store, sale=sale)

