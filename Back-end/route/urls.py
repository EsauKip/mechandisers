from django.urls import path
from route.views import ManagerRegistrationView, MerchandiserRegistrationView

app_name = 'route'

urlpatterns = [
    #Registration Urls
    path('registration/manager/', ManagerRegistrationView.as_view(), name='register-manager'),
    path('registration/merchandiser/', MerchandiserRegistrationView.as_view(), name='register-merchandiser'),
    
]