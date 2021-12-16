import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutComponent implements OnInit {
  public chartConfig = {
    chartArea: {
      background: 'transparent',
      height: 400,
      top: 0,
      width: 500,
    },

    legend: {
      reverse: true,
      labels: {
        color: '#cccccc',
        margin: 5,
        font: '12px Helvetica Neue',
        content: (e) => `${e.value} ${e.text}`,
      },
    },
    tooltip: {
      visible: true,
      font: '14px Helvetica Neue',
      padding: 3,
    },
    series: [
      {
        holeSize: 80,
        margin: 5,
        name: 'parts',
        type: 'donut',
        border: {
          width: 2,
          color: 'black',
          dashType: 'solid',
        },
        explodeField: 'explode',

        data: [
          {
            category: 'Data Point 1',
            value: 35,
            color: 'rgba(154, 0, 54, 1)',
            explode: false,
          },
          {
            category: 'Data Point 2',
            value: 25,
            color: 'rgba(154, 0, 54, .9)',
          },
          {
            category: 'Data Point 3',
            value: 20,
            color: 'rgba(154, 0, 54, .8)',
          },
          {
            category: 'Data Point 4',
            value: 10,
            color: 'rgba(154, 0, 54, .7)',
          },
          {
            category: 'Data Point 5',
            value: 5,
            color: 'rgba(154, 0, 54, .6)',
          },
          {
            category: 'Data Point 6',
            value: 3,
            color: 'rgba(154, 0, 54, .4)',
          },
          {
            category: 'Data Point 7',
            value: 2,
            color: 'rgba(154, 0, 54, .3)',
          },
        ],
      },
    ],
    legendItemClick: function (e) {
      e.preventDefault();
    },
  };
  ngOnInit(): void {}
}
