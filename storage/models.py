from django.db import models

# Create your models here.


class Product(models.Model):
    product_name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    STORE_CHOICES = (
        ('CU', 'CU'),
        ('GS', 'GS25'),
        ('SV', 'SEVEN ELEVEN')
    )
    store = models.CharField(
        max_length=2,
        choices=STORE_CHOICES
    )
    img_url = models.URLField(max_length=300)
    SALE_CHOICES = (
        ('OPO', 'One Plus One'),
        ('TPO', 'Two Plus One'),
        ('OTR', 'Other')
    )
    sale = models.CharField(
        max_length=3,
        choices=SALE_CHOICES
    )

    def __str__(self):
        return self.product_name


