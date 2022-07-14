from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib import auth
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from EmployeApp.models  import Departments , Employees , Admin , Portes , Devices 
from EmployeApp.serializers import DepartmentSerializer , EmployeeSerializer , AdminSerializer , PortesSerializer , DeviceSerializer 
from django.core.files.storage import default_storage


@csrf_exempt
def departmentApi(request,id=0):
    if request.method=='GET':
        departments = Departments.objects.all()
        departments_serializer = DepartmentSerializer(departments, many=True)
        return JsonResponse(departments_serializer.data, safe=False)

    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        department_serializer = DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        department_data = JSONParser().parse(request)
        department=Departments.objects.get(DepartmentId=department_data['DepartmentId'])
        department_serializer=DepartmentSerializer(department,data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        department=Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def employeeApi(request,id=0):
    if request.method=='GET':
        employees = Employees.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)

    elif request.method=='POST':
        employee_data=JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        employee_data = JSONParser().parse(request)
        employee=Employees.objects.get(EmployeeId=employee_data['EmployeeId'])
        employee_serializer=EmployeeSerializer(employee,data=employee_data)
        if employee_serializer.is_valid() :
            employee_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)


    elif request.method=='DELETE':
        employee=Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)


@csrf_exempt
def PortesApi(request,porteNum=0):
    if request.method=='GET':
        portes = Portes.objects.all()
        portes_serializer = PortesSerializer(portes, many=True)
        return JsonResponse(portes_serializer.data, safe=False)

    elif request.method=='POST':
        porte_data=JSONParser().parse(request)
        porte_serializer = PortesSerializer(data=porte_data)
        if porte_serializer.is_valid():
            porte_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        porte_data = JSONParser().parse(request)
        porte=Portes.objects.get(PorteNum=porte_data['PorteNum'])
        porte_serializer=PortesSerializer(porte,data=porte_data)
        if porte_serializer.is_valid():
            porte_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        porte=Portes.objects.get(PorteNum=porteNum)
        porte.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
    



@csrf_exempt
def AdminApi(request,id=0):
    if request.method=='GET':
        admin = Admin.objects.all()
        admin_serializer = AdminSerializer(admin, many=True)
        return JsonResponse(admin_serializer.data, safe=False)

    elif request.method=='POST':
        admin_data=JSONParser().parse(request)
        admin_serializer = AdminSerializer(data=admin_data)
        if admin_serializer.is_valid():
            admin_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        admin_data = JSONParser().parse(request)
        admin=Admin.objects.get(AdminId=admin_data['AdminId'])
        admin_serializer=AdminSerializer(admin,data=admin_data)
        if admin_serializer.is_valid() :
            admin_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        admin =Admin.objects.get(AdminId=id)
        admin.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

    
@csrf_exempt
def DeviceApi(request, num =0):
    if request.method=='GET':
        devices = Devices.objects.all()
        devices_serializer = DeviceSerializer(devices, many=True)
        return JsonResponse(devices_serializer.data, safe=False)

    elif request.method=='POST':
        devices_data=JSONParser().parse(request)
        devices_serializer = DeviceSerializer(data=devices_data)
        if devices_serializer.is_valid():
            devices_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        devices_data = JSONParser().parse(request)
        devices=Devices.objects.get(DeviceNum=devices_data['DeviceNum'])
        devices_serializer=DeviceSerializer(devices,data=devices_data)
        if devices_serializer.is_valid():
            devices_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        devices = Devices.objects.get(DeviceNum= num)
        devices.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)