from django.shortcuts import render
from rest_auth.registration.views import RegisterView
from route.serializers import (
    ManagerCustomRegistrationSerializer, MerchandiserCustomRegistrationSerializer
    )

class ManagerRegistrationView(RegisterView):
    serializer_class = ManagerCustomRegistrationSerializer


class MerchandiserRegistrationView(RegisterView):
    serializer_class = MerchandiserCustomRegistrationSerializer
