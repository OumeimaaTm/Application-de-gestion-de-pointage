import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared/shared.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  constructor(private service:SharedService) { }

  @Input() 
  emp:any;
  EmployeeId:string;
  EmployeeName:string;
  Department:string;
  DateOfJoining:string;
  PhotoFileName:string;
  PhotoFilePath:string;
  DateOfBirth:string;
  gender:string;
  Telephone:string;
  Address:string;
  Email:string;

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.EmployeeId=this.emp.EmployeeId;
      this.EmployeeName=this.emp.EmployeeName;
      this.Department=this.emp.Department;
      this.DateOfBirth =this.emp.DateOfBirth ;
      this.gender= this.emp.gender ;
      this.Telephone=this.emp.Telephone ;
      this.Address=this.emp.Address ;
      this.DateOfJoining=this.emp.DateOfJoining;
      this.Email=this.emp.Email ;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addEmployee(){
    var val = {EmployeeId:this.EmployeeId,
                EmployeeName:this.EmployeeName,
                Department:this.Department,
                DateOfBirth :this.DateOfBirth ,
                gender: this.gender ,
                Telephone:this.Telephone ,
                Address:this.Address ,
                DateOfJoining:this.DateOfJoining,
                Email:this.Email ,
                PhotoFileName:this.PhotoFileName,
                PhotoFilePath:this.service.PhotoUrl+this.PhotoFileName,
              };

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
                EmployeeName:this.EmployeeName,
                Department:this.Department,
                DateOfBirth :this.DateOfBirth ,
                gender: this.gender ,
                Telephone:this.Telephone ,
                Address:this.Address ,
                DateOfJoining:this.DateOfJoining,
                Email:this.Email ,
                PhotoFileName:this.PhotoFileName,
                PhotoFilePath:this.service.PhotoUrl+this.PhotoFileName,};

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }
  
  
 uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
    this.PhotoFileName=data.toString();
    this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }

}
  
  