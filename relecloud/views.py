from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from .serializer import DestinationSerializer
from .models import Destination

# Create your views here.
def index(request):
    return HttpResponse('Hello, world')

def about(request):
    return render(request, 'about.html')


class DestinationViewSet(viewsets.ModelViewSet):
    serializer_class = DestinationSerializer
    queryset = Destination.objects.all()
    
