import { Component, ViewChild, Input } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { Chart } from 'chart.js';
@Component({
  selector: 'accordion-width-chart',
  templateUrl: 'accordion-width-chart.html',
})
export class AccordionWidthChart {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  @Input() k;
  @Input() list;
  @Input() data;
  @Input() h;
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '03'],
        datasets: [
          {

            backgroundColor: "rgba(74, 239, 52, 1)",
            data: this.data.data1
          },
          {
            backgroundColor: "rgba(255, 168, 0, 1)",
            data: this.data.data2
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
  openCards(data,k) {
     for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].open===true && i!==k) {          
        this.list[i].open =false;
        this.list[i].icon='arrow-down'
      }
    }
    this.data.open=!this.data.open;
    this.data.icon='arrow-up';
    if (!data.open) {
      data.icon = 'arrow-down';
    } else {
      data.icon ='arrow-up';
    }
  }
  getHeigth() {
    return this.h + 'px'
  }
  
}





//http://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/

