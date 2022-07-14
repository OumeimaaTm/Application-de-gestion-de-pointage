import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared/shared.service';


@Component({
  selector: 'app-show-porte',
  templateUrl: './show-porte.component.html',
  styleUrls: ['./show-porte.component.css']
})
export class ShowPorteComponent implements OnInit {

  constructor(private service:SharedService ) { }
  PorteList:any=[];
  
  ModalTitle:string;
  ActivateAddEditPorteComp:boolean=false;
  porte:any;


  ngOnInit(): void {
    this.refreshPorteList();
  }

  addClick(){
    this.porte={
      PorteNum:0,
      Access:"",
      EmployeeName:"",
     
    }
    this.ModalTitle="Ajouter une porte";
    this.ActivateAddEditPorteComp=true;
  }


  editClick(item){
    console.log(item);
    this.porte=item;
    this.ModalTitle="Modifier une porte";
    this.ActivateAddEditPorteComp=true;
  }

  deleteClick(item){
    if(confirm('Confirmer??')){
      this.service.deletePorte(item.PorteNum).subscribe(data=>{
        alert(data.toString());
        this.refreshPorteList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditPorteComp=false;
    this.refreshPorteList();
  }

  refreshPorteList(){
    this.service.getEmpList().subscribe(data=>{
      this.PorteList=data;
    });
  }


}



