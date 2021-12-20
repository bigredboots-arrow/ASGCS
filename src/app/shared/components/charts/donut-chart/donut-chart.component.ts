import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { geometry } from '@progress/kendo-drawing';

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
          width: 3,
          color: '#151515',
          dashType: 'solid',
        },
        explodeField: 'explode',

        data: [
          {
            category: 'Data Point 1',
            value: 35,
            color: '#065aa3',
            explode: false,
          },
          {
            category: 'Data Point 2',
            value: 25,
            color: '#1664a9',
          },
          {
            category: 'Data Point 3',
            value: 20,
            color: '#3d7eb7',
          },
          {
            category: 'Data Point 4',
            value: 10,
            color: '#84add2',
          },
          {
            category: 'Other',
            value: 5,
            color: '#d4e3ef',
          },
        ],
      },
    ],
  };
  ngOnInit(): void {}
  @ViewChild('donutoverview') donutoverview: ElementRef;

  onClickMe() {
    this.donutoverview.nativeElement.classList.toggle('active');
    this.chartConfig = {
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
            width: 3,
            color: '#151515',
            dashType: 'solid',
          },
          explodeField: 'explode',

          data: [
            {
              category: 'Data Point 1',
              value: 30,
              color: '#065aa3',
              explode: false,
            },
            {
              category: 'Data Point 2',
              value: 27,
              color: '#0d5fa6',
            },
            {
              category: 'Data Point 3',
              value: 22,
              color: '#1664a9',
            },
            {
              category: 'Data Point 4',
              value: 15,
              color: '#2871b0',
            },
            {
              category: 'Data Point 5',
              value: 11,
              color: '#4181b9',
            },
            {
              category: 'Data Point 6',
              value: 8,
              color: '#538dc0',
              explode: false,
            },
            {
              category: 'Data Point 7',
              value: 6,
              color: '#7eaacf',
            },
            {
              category: 'Data Point 8',
              value: 5,
              color: '#b3cde3',
            },
            {
              category: 'Data Point 9',
              value: 4,
              color: '#d4e3ef',
            },
            {
              category: 'Other',
              value: 2,
              color: '#FFF',
            },
          ],
        },
      ],
    };
  }
  public labelContent(e: any): string {
    return e.category;
  }

  onClickMeClicked() {
    this.donutoverview.nativeElement.classList.toggle('active');
    this.chartConfig = {
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
            width: 3,
            color: '#151515',
            dashType: 'solid',
          },
          explodeField: 'explode',

          data: [
            {
              category: 'Data Point 1',
              value: 36,
              color: '#065aa3',
              explode: false,
            },
            {
              category: 'Data Point 2',
              value: 26,
              color: '#1664a9',
            },
            {
              category: 'Data Point 3',
              value: 21,
              color: '#3d7eb7',
            },
            {
              category: 'Data Point 4',
              value: 11,
              color: '#84add2',
            },
            {
              category: 'Other',
              value: 6,
              color: '#d4e3ef',
            },
          ],
        },
      ],
    };
  }
  public onSeriesClick(args: any): void {
    if (!args.dataItem.highlighted || args.dataItem.highlighted === '') {
      args.dataItem.highlighted = true;
      var origin = args.point.sector.center;
      args.point.visual.transform(
        (geometry.transform() as any).scale(1.07, 1.07, [origin.x, origin.y])
      );
    } else {
      args.dataItem.highlighted = false;
      var origin = null; // args.point.box.center()
      args.point.visual.transform(null);
    }
  }
}
