from django.shortcuts import render
from rest_framework import viewsets

from .serializers import UserSerializer
from .models import User

#view renders json
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('name')
    serializer_class = UserSerializer



