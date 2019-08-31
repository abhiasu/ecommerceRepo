import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scaleShowLabels : false,
    omitXLabels: true,
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    
  }

  


  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {
      label: "Europe",
      type: "line",
      borderColor: "#8e5ea2",
      data: [408,547,675,734],
      fill: false
    }, {
      label: "Africa",
      type: "line",
      borderColor: "#3e95cd",
      data: [133,221,783,2478],
      fill: false
    }, {
      label: "Europe",
      type: "bar",
      backgroundColor: "rgba(0,0,0,0.2)",
      data: [408,547,675,734],
    }, {
      label: "Africa",
      type: "bar",
      backgroundColor: "rgba(0,0,0,0.2)",
      backgroundColorHover: "#3e95cd",
      data: [133,221,783,2478]
    }
  ];
  public radarChartType = 'line';

  public radarChartOptions:any = {
    scaleShowLabels : false,
    scales: {
      xAxes: [{
        display: false,
          gridLines: {
              display:false
          }
      }],
      yAxes: [{
        display: false,
          gridLines: {
              display:false
          }   
      }]
  },
    // title: {
    //   display: true,
    //   text: 'Population growth (millions): Europe & Africa'
    // },
    legend: { display: false }
  };

}
