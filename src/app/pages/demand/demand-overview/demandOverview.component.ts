import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'demand-overview',
  templateUrl: './demandOverview.component.html',
  styleUrls: ['./demandOverview.component.scss']
})
export class DemandOverviewComponent implements OnInit {
  @ViewChild('overview') overview: ElementRef;

  toggleMoreInfo() {
    this.overview.nativeElement.classList.toggle('moreinfo-active');
  }
  ngOnInit(): void {}
}
