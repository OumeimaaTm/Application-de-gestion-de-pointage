import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared/shared.service';

@Component({
  selector: 'app-add-porte',
  templateUrl: './add-porte.component.html',
  styleUrls: ['./add-porte.component.css']
})
export class AddPorteComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() 
  porte:any;
  PorteNum:string;
  Access : string ;
  EmployeeName:string;
  PhotoFileName:string;
  PhotoFilePath:string;



  ngOnInit(): void {
    this.PorteNum=this.porte.PorteNum;
    this.Access=this.porte.Access;
    this.EmployeeName=this.porte.EmployeeName;
    this.PhotoFileName=this.porte.PhotoFileName;
    this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
  }

  addPorte(){
    var val = {PorteNum:this.PorteNum,
    Access:this.Access,
    EmployeeName:this.EmployeeName,
    PhotoFileName:this.PhotoFileName,
    PhotoFilePath:this.service.PhotoUrl+this.PhotoFileName,
    };
    
    this.service.addPorte(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  updatePorte(){
    var val = {PorteNum:this.PorteNum,
    Access:this.Access,
    EmployeeName:this.EmployeeName ,
    PhotoFileName:this.PhotoFileName,
    PhotoFilePath:this.service.PhotoUrl+this.PhotoFileName,
  };
    this.service.updateAccess(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  
}