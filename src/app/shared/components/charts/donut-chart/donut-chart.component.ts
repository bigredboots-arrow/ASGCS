import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class DonutComponent implements OnInit {
  public chartConfig = {
    chartArea: {
      background: 'transparent',
      height: 280,
      top: 0,
      padding: 0,
      margin: 0,
      width: 280,
      autoFit: false,
    },
    legend: {
      visible: false,
    },
    series: [
      {
        holeSize: 65,
        margin: 0,
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
            color: 'rgba(6, 90, 163, 1)',
            explode: false,
          },
          {
            category: 'Data Point 2',
            value: 25,
            color: 'rgba(6, 90, 163, .8)',
          },
          {
            category: 'Data Point 3',
            value: 20,
            color: 'rgba(6, 90, 163, .6)',
          },
          {
            category: 'Data Point 4',
            value: 10,
            color: 'rgba(6, 90, 163, .4)',
          },
          {
            category: 'Other',
            value: 5,
            color: 'rgba(6, 90, 163, .2)',
          },
        ],
      },
    ],
  };
  ngOnInit(): void {}
}
