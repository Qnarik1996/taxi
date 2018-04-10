import { Component, ViewChild, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  @Input() list;
  @ViewChild('barCanvas') barCanvas;
  barChart: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) { 
  
    
  }
  ngOnInit() {


    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '03'],
        datasets: [
          {

            backgroundColor: "rgba(74, 239, 52, 1)",
            data: this.list.data1
          },
          {
            backgroundColor: "rgba(255, 168, 0, 1)",
            data: this.list.data2
          }
        ]
      },


      options: {
        tooltips: {
          enabled: true
        },
        scaleShowVerticalLines: false,
        legend: {
          display: false,

          labels: {
            display: false,
          }
        },

        title: {
          display: false,

        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,

            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
            },
            display: true,
            
            ticks: {
              beginAtZero: true,
              fontFamily: "Montserrat",
              min: 100,
              max: 500,
              stepSize: 200,
              
              
            },
          
        }
          ],



        }
      }
    });
  }




}
//http://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/