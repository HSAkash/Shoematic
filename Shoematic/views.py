from django.http import  FileResponse
from django.shortcuts import  get_object_or_404
import os
from base.models import Product

def MediaFilesView(request, file):
    document = get_object_or_404(Product, image=file)
    # path, file_name = os.path.split(file)
    response = FileResponse(document.image)
    return response