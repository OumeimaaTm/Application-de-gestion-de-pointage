import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import {SharedService} from 'src/app/shared/shared.service';
import SampleJson from 'src/assets/SampleJson.json' ;

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private service:SharedService) {   console.log('Reading local json files');
  console.log(SampleJson);}
  public datasets: any;
  public data: any;
  public labels:any ;
  public test;
  public salesChart;
  public ordersChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  EmployeeList:any=[];
  public List:{name:string, date:string, status:string}[] = SampleJson;
  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  res ;
  res1 ;
  EmployeeIdFilter:string="";
  EmployeeNameFilter:string="";
  EmployeeListWithoutFilter:any=[];
  result:any=[];
  count = [];
  count1 = [];
  result1 = [];

  ngOnInit() {
    interface employ {
      name: string
      date: string
      status: string
    }
    
    this.res = this.List.map(item => Object.values(item));
    this.result = this.res.map((_, colIndex) => this.res.map(row => row[colIndex]));
    const counts = {};
    const counts1 = {};
    const result2= [];

    for (let i = 0; i < this.result[1].length; i++){
      this.result1.push(this.result[1][i].substring(3,5));
    }
    
    for (let i = 0; i < this.result[1].length; i++){
      result2.push(this.result[1][i].substring(0,5));
    }

    for (const num of this.result1 ) {
      counts1[num] = counts1[num] ? counts1[num] + 1 : 1;
    }

    


    for (const num of result2) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }


    for (let i = 0; i < Object.keys(counts).length; i++){
      this.count.push(counts[Object.keys(counts)[i]]);
    }

    for (let i = 0; i < Object.keys(counts1).length; i++){
      this.count1.push(counts1[Object.keys(counts1)[i]]);
    }
 
    this.datasets = [
      this.count ,
      this.count1
    ];
    this.data = this.datasets[0];
    chartExample1.data.labels = Object.keys(counts);
    chartExample2.data.labels = Object.keys(counts1);
    chartExample2.data.datasets[0].data = [0.82,0.76,0.52] ;
    

    this.refreshEmpList();

    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());
    
 
    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });
    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }
  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
  groupBy (list: any[], key: string): Map<string, Array<any>> {
    let map = new Map();
    list.map(val=> {
        if(!map.has(val[key])){
            map.set(val[key],list.filter(data => data[key] == val[key]));
        }
    });
    return map;
  };

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfBirth:"",
      gender:"",
      Telephone:"",
      Address:"",
      status:"",
      DateOfJoining:"",
      Email:"",
      PhotoFileName:""  ,
    }
    this.ModalTitle="Ajouter un employé";
    this.ActivateAddEditEmpComp=true;
  }

  editClick(item){
    console.log(item);
    this.emp=item;
    this.ModalTitle="Modifier l'Employé";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item){
    if(confirm('Confirmer ??')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }
  
  FilterFn(){
    var EmployeeIdFilter = this.EmployeeIdFilter;
    var EmployeeNameFilter = this.EmployeeNameFilter;

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el){
        return el.EmployeeId.toString().toLowerCase().includes(
          EmployeeIdFilter.toString().trim().toLowerCase()
        )&&
        el.EmployeeName.toString().toLowerCase().includes(
          EmployeeNameFilter.toString().trim().toLowerCase()
        )
    });
  }
  
  sortResult(prop,asc){
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }
}
