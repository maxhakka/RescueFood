import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('moneyCanvas') moneyCanvas;
  @ViewChild('carbonCanvas') carbonCanvas;
 
  barChart: any;
  moneyChart: any;
  carbonChart: any;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
 
    this.barChart = new Chart(this.barCanvas.nativeElement, {

        type: 'horizontalBar',
        data: {
            labels: ["My Portions", "Average"],
            datasets: [{
                label: '# of Portions',
                data: [13, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }

    });

    this.moneyChart = new Chart(this.moneyCanvas.nativeElement, {

      type: 'horizontalBar',
      data: {
          labels: ["My Savings", "Average"],
          datasets: [{
              label: 'Amount of SEK',
              data: [534, 320],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          legend: {
              display: false
          },
          scales: {
              xAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }

    });

    this.carbonChart = new Chart(this.carbonCanvas.nativeElement, {

      type: 'horizontalBar',
      data: {
          labels: ["My Contribution", "Average"],
          datasets: [{
              label: 'Amount of CO2',
              data: [34, 25],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          legend: {
            display: false
          },
          scales: {
              xAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    });

}
  

}
