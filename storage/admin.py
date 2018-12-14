from django.contrib import admin
from storage.models import Product

# Register your models here.


class ProductAdmin(admin.ModelAdmin):
    list_per_page = 10
    list_display = (
        'product_name', 'store', 'sale', 'img_url'
    )
    list_editable = ('store', 'sale')
    ordering = ('store',)


admin.site.register(Product, ProductAdmin)
