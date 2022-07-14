from django.contrib import admin
from django.urls import path,include
from django.urls import re_path as url

urlpatterns = [
    path('admin/', admin.site.urls),
    #url for browserable api use for login and logoutviews 
    path ('api/auth/', include ('rest_framework.urls')), 
    url(r'^', include('EmployeApp.urls')), 
]
