from django.urls import path
from . import views


app_name = 'storage'

urlpatterns = [
    path('', views.Items.as_view(), name='home'),
    path('<str:store>/<str:sale>/', views.Items.as_view(), name='items')
]