
from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from rest_framework.authtoken.models import Token

from route.models import Manager, Merchandiser

class ManagerCustomRegistrationSerializer(RegisterSerializer):
    seller = serializers.PrimaryKeyRelatedField(read_only=True,) #by default allow_null = False
    area = serializers.CharField(required=True)
    address = serializers.CharField(required=True)
    description = serializers.CharField(required=True)
    
    def get_cleaned_data(self):
            data = super(ManagerCustomRegistrationSerializer, self).get_cleaned_data()
            extra_data = {
                'area' : self.validated_data.get('area', ''),
                'address' : self.validated_data.get('address', ''),
                'description': self.validated_data.get('description', ''),
            }
            data.update(extra_data)
            return data

    def save(self, request):
        user = super(ManagerCustomRegistrationSerializer, self).save(request)
        user.is_manager = True
        user.save()
        manager = Manager(manager=user, area=self.cleaned_data.get('area'), 
                address=self.cleaned_data.get('address'),
                description=self.cleaned_data.get('description'))
        manager.save()
        return user


class MerchandiserCustomRegistrationSerializer(RegisterSerializer):
    merchandiser = serializers.PrimaryKeyRelatedField(read_only=True,) #by default allow_null = False
    country = serializers.CharField(required=True)
    
    def get_cleaned_data(self):
            data = super(MerchandiserCustomRegistrationSerializer, self).get_cleaned_data()
            extra_data = {
                'country' : self.validated_data.get('country', ''),
            }
            data.update(extra_data)
            return data

    def save(self, request):
        user = super(MerchandiserCustomRegistrationSerializer, self).save(request)
        user.is_merchandiser = True
        user.save()
        merchandiser = Merchandiser(merchandiser=user,country=self.cleaned_data.get('country'))
        merchandiser.save()
        return user