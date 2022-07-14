import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000";
readonly PhotoUrl = "http://127.0.0.1:8000/media";

  constructor(private http:HttpClient) { }
 
  //Gestion des départements
  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl + '/department/',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl + '/department/',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl + '/department/'+val);
  }

  // Gestion des employées 

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employee/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl + '/employee/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl + '/employee/',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl + '/employee/'+val);
  }

  //Update un employée avec son Id
  updateEmployeeById(val:any){
    return this.http.put(this.APIUrl + '/employeeById/',val);
   }

  //Télecharger la photo de profil
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }
  
  //La liste des départments
  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/department/');
  }
 

  //Diff Access
  getAllAccess():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/porte');
  }


 // Contrôle d'accés
  getPorte():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/porte');
  }

  addPorte(val:any){
    return this.http.post(this.APIUrl + '/porte',val);
  }

  updateAccess(val:any){
    return this.http.put(this.APIUrl + '/porte',val);
  }

  deletePorte(val:any){
    return this.http.delete(this.APIUrl + '/porte/'+val);
  }


 //Admin 
  getAdminInfo():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/admin/');
  }

  addAdmin(val:any){
    return this.http.post(this.APIUrl + '/admin/',val);
  }

  updateAdmin(val:any){
    return this.http.put(this.APIUrl + '/admin/',val);
  }

  deleteAdmin(val:any){
    return this.http.delete(this.APIUrl + '/admin/'+val);
  }




  //Gestion des devices
  getDeviceList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/device/');
  }

  addDevice(val:any){
    return this.http.post(this.APIUrl + '/device/',val);
  }

  updateDevice(val:any){
    return this.http.put(this.APIUrl + '/device/',val);
  }

  deleteDevice(val:any){
    return this.http.delete(this.APIUrl + '/device/'+val);
  }

  //La liste des devices
  getAllDeviceNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/device/');
  }
}