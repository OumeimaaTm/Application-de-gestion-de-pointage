import { Component, OnInit ,Input } from '@angular/core';
import {SharedService} from 'src/app/shared/shared.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() device:any;
  DeviceNum:string;
  Reference:string;
  DeviceName:string;
  Details:string;
  DateOfInstall:string;
  Location:string ;
  Etat: string ;
  

  DeviceList:any=[];

  ngOnInit(): void {
    this.loadDeviceList();
  }

  loadDeviceList(){
    this.service.getAllDeviceNames().subscribe((data:any)=>{
      this.DeviceList=data;

      this.DeviceNum=this.device.DeviceNum;
      this.Reference=this.device.Reference;
      this.DeviceName=this.device.DeviceName;
      this.Details =this.device.Details ;
      this.DateOfInstall= this.device.DateOfInstall;    
      this.Etat=this.device.Etat;
      this.Location=this.device.Location;
    });
  }

  addDevice(){
    var val = { DeviceNum:this.DeviceNum,
                Reference:this.Reference,
                DeviceName:this.DeviceName,
                Details: this.Details ,
                DateOfInstall:this.DateOfInstall ,
                Etat:this.device.Etat ,
                Location:this.device.Location,               
              };

    this.service.addDevice(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDevice(){
    var val = {
                DeviceNum:this.device.DeviceNum,
                Reference:this.device.Reference,
                DeviceName:this.device.DeviceName,
                Details :this.device.Details ,
                DateOfInstall: this.device.DateOfInstall, 
                Etat:this.device.Etat ,
                Location:this.device.Location ,
                };

    this.service.updateDevice(val).subscribe(res=>{
      alert(res.toString());
    });
  
  }
  


}
  
  
