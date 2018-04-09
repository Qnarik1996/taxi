import { Component, ViewChild, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {
  @Input() open;
  @ViewChild('barCanvas') barCanvas;
  barChart: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {}
ngOnInit(){
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '03'],
        datasets: [
          {

            backgroundColor: "rgba(74, 239, 52, 1)",
            data: [500, 300, 150, 500, 200, 130, 150, 500, 300, 150, 500, 200, 130, 150, 500]
          },
          {
            backgroundColor: "rgba(255, 168, 0, 1)",
            data: [350, 400, 130, 130, 350, 125, 200, 350, 400, 130, 130, 350, 125, 200, 300]
          }
        ]
      },

      
      options: {
        scaleShowVerticalLines: true,

        legend: {
          display: false,
      
          labels: {
            display:false,
          }
        },
    
        title: {
          display: false,

        },
    
        
        scales: {
            xAxes: [{
                gridLines: {
                    display:false,
                    
                }
            }],
            yAxes:[
                {
                    ticks: {
                        min: 100,
                        max: 500,
                        stepSize: 200,
                      }
           }],
           

          }
      }
    });
  }

  


}
//http://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/