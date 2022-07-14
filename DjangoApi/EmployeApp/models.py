from django.db import models

class Departments(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=100)
    
class Employees(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    Department = models.CharField(max_length=100)
    DateOfBirth = models.DateField()
    gender = models.CharField(max_length=100)
    Telephone = models.CharField(max_length=100)
    Address= models.CharField(max_length=100)
    DateOfJoining = models.DateField()
    Email = models.CharField(max_length=100)
    PhotoFileName = models.CharField(max_length=100)

class Admin(models.Model):
    AdminId = models.AutoField(primary_key=True)
    UserName = models.CharField(max_length=100)
    Nom = models.CharField(max_length=100)
    Prénom = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Adresse =models.CharField(max_length=100)
    Gouvernorat =models.CharField(max_length=100)
    Ville = models.CharField(max_length=100)
    CodePostal = models.CharField(max_length=100)
    AdminPhoto = models.CharField(max_length=100)

class Portes(models.Model):
    PorteNum = models.AutoField(primary_key=True)
    Access = models.CharField(max_length=100)
    



class Devices (models.Model):
    DeviceNum = models.AutoField(primary_key=True)
    Reference = models.Field()
    DeviceName = models.CharField(max_length=100)
    Details = models.CharField(max_length=5000)
    DateOfInstall = models.DateField()
    Etat=models.CharField(max_length=100, null=False)
    Location=models.CharField(max_length=100, null=False)