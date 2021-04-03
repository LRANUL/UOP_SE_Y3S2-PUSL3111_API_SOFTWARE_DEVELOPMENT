import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'COVID 19 Affected - Per Day'
      },
      subtitle: {
        text: 'Demo'
      },

      xAxis: {
        categories: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        //tickmarkPlacement: 'on',

        title: {
          enabled: false
        }
      },

      yAxis: {
        //categories:[50,100,150,200,250,300,350,400,450,500,550,600,650],
        title: {
          text: 'Covid Affected'
        },
        labels: {
          formatter: function () {
            return this.value;
          }
        }
      },

      tooltip: {
        split: true,
        valueSuffix: ''
      },
      plotOptions: {
        area: {
          //stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 0,
          
          marker: {
            lineWidth: 0,
            lineColor: '#666666'
          }
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true,
      },
      series: this.data
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
