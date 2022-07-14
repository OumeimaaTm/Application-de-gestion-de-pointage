from django.urls import re_path as url
from EmployeApp import views

from django.conf.urls.static import static
from django.conf import settings

from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns=[

    url(r'^department/$',views.departmentApi),
    url(r'^department/([0-9]+)$',views.departmentApi),

    url(r'^employee/$',views.employeeApi),
    url(r'^employee/([0-9]+)$',views.employeeApi),
    
    url(r'^porte$',views.PortesApi),
    url(r'^porte/([0-9]+)$',views.PortesApi),

    url(r'^admin$',views.AdminApi),
    url(r'^admin/([0-9]+)$',views.AdminApi),


    url(r'^SaveFile$', views.SaveFile)   ,

    url(r'^device/',views.DeviceApi ),
    url(r'^device/([0-9]+)$',views.DeviceApi),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns = format_suffix_patterns(urlpatterns)
