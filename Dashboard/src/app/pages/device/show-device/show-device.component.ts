import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared/shared.service';

@Component({
  selector: 'app-show-device',
  templateUrl: './show-device.component.html',
  styleUrls: ['./show-device.component.css']
})
export class ShowDeviceComponent implements OnInit {

  constructor(private service:SharedService) { }

  DeviceList:any=[];

  ModalTitle:string;
  ActivateAddEditDeviceComp:boolean=false;
  device:any;
  plus:any;


  DeviceNumFilter:string="";
  DeviceNameFilter:string="";
  DeviceListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDeviceList();
  }

  addClick(){
    this.device={
      DeviceNum:0,
      Reference:"",
      DeviceName:"",
      Details:"" ,
      DateOfInstall:"" , 
      Etat:"",
      Location:"",
    }
    this.ModalTitle="Ajouter un device";
    this.ActivateAddEditDeviceComp=true;

  }

  editClick(item){
    this.device=item;
    this.ModalTitle="Modifier un device";
    this.ActivateAddEditDeviceComp=true;
  }

  deleteClick(item){
    if(confirm('confirmer??')){
      this.service.deleteDevice(item.DeviceNum).subscribe(data=>{
        alert(data.toString());
        this.refreshDeviceList();
      })
    }
  }

  PlusClick(){
    this.plus={
      Details:"" ,
    }
    this.ModalTitle="Détails";
    this.ActivateAddEditDeviceComp=true;
  }


  closeClick(){
    this.ActivateAddEditDeviceComp=false;
    this.refreshDeviceList();
  }


  refreshDeviceList(){
    this.service.getDeviceList().subscribe(data=>{
      this.DeviceList=data;
      this.DeviceListWithoutFilter=data;
    });
  }

  FilterFn(){
    var DeviceNumFilter = this.DeviceNumFilter;
    var DeviceNameFilter = this.DeviceNameFilter;

    this.DeviceList = this.DeviceListWithoutFilter.filter(function (el){
        return el.DeviceNum.toString().toLowerCase().includes(
          DeviceNumFilter.toString().trim().toLowerCase()
        )&&
        el.DeviceName.toString().toLowerCase().includes(
          DeviceNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.DeviceList = this.DeviceListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}