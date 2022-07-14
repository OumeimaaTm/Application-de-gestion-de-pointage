from rest_framework import serializers
from EmployeApp.models import Departments , Employees , Admin , Portes , Devices 

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentId',
                  'DepartmentName')
                  
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId',
                  'EmployeeName',
                  'Department',
                  'DateOfBirth' ,
                  'gender' ,
                  'Telephone' ,
                  'Address' ,
                  'DateOfJoining' ,
                  'Email',
                  'PhotoFileName')
                  

                  
class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('AdminId' ,
                'UserName' ,
                'Nom' ,
                'Prénom' ,
                'Email' ,
                'Adresse' ,
                'Gouvernorat' ,
                'Ville' ,
                'CodePostal' ,
                'AdminPhoto' )
    

class PortesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portes
        fields = ('PorteNum',
                  'Access',)                                  

class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devices
        fields = (
                  'DeviceNum',
                  'Reference', 
                  'DeviceName' , 
                  'Details' , 
                  'DateOfInstall' ,
                  'Etat' ,
                  'Location')