from django.http import  FileResponse, HttpResponseRedirect
from django.shortcuts import  get_object_or_404
import os
from base.models import Product

def MediaFilesView(request, version, file):
    path, file_name = os.path.split(file)
    for product in Product.objects.all():
        if file_name in product.image.url:
            return HttpResponseRedirect(product.image.url)
    document = get_object_or_404(Product, file=file)
    response = FileResponse(document.image)
    return response