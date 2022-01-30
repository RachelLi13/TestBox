from socket import herror
from rest_framework import serializers
from .models import User

#Serializing converts model to json
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'email', 'version_control', 'team_size')
