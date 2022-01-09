from django.contrib import admin

from . import models


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'countInStock', 'createdAt')
    list_filter = ()
    search_fields = ('name',)
    date_hierarchy = 'createdAt'
    ordering = ['-createdAt']
    filter_horizontal = ()
    fieldsets = ()
    list_per_page = 10


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('product', 'user', 'rating', 'createdAt')
    list_filter = ()
    search_fields = ('product',)
    date_hierarchy = 'createdAt'
    ordering = ['-createdAt']
    filter_horizontal = ()
    fieldsets = ()
    list_per_page = 10


class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'paymentMethod', 'totalPrice', 'isPaid',
                    'isDelivered', 'createdAt',)
    list_filter = ('isPaid', 'isDelivered',)
    search_fields = ('user',)
    date_hierarchy = 'createdAt'
    ordering = ['-createdAt']
    filter_horizontal = ()
    fieldsets = ()
    list_per_page = 10


class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'qty', 'price',)
    list_filter = ()
    search_fields = ('order', 'product',)
    filter_horizontal = ()
    fieldsets = ()
    list_per_page = 10


class ShippingAddress(admin.ModelAdmin):
    list_display = ('order', 'city', 'postalCode', 'shippingPrice',
                    'phone',)
    list_filter = ('city',)
    search_fields = ('order', 'city', 'postalCode',)
    filter_horizontal = ()
    fieldsets = ()
    list_per_page = 10


admin.site.register(models.Product, ProductAdmin)
admin.site.register(models.Review, ReviewAdmin)
admin.site.register(models.Order, OrderAdmin)
admin.site.register(models.OrderItem, OrderItemAdmin)
admin.site.register(models.ShippingAddress, ShippingAddress)
