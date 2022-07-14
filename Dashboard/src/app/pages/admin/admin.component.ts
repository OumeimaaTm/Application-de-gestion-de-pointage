import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:SharedService ) { }
  
  ngOnInit(): void {
    
  }

  

}