import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'demand-overview',
  templateUrl: './demandOverview.component.html',
  styleUrls: ['./demandOverview.component.scss']
})
export class DemandOverviewComponent implements OnInit {
  @ViewChild('partoverview') partoverview: ElementRef;
  @ViewChild('fsiteoverview') fsiteoverview: ElementRef;
  @ViewChild('totaldemandoverview') totaldemandoverview: ElementRef;
  @ViewChild('flocationsoverview') flocationsoverview: ElementRef;

  PartOverviewtoggleMoreInfo() {
    this.partoverview.nativeElement.classList.toggle('moreinfo-active');
  }
  FsitetoggleMoreInfo() {
    this.fsiteoverview.nativeElement.classList.toggle('moreinfo-active');
  }
  TotalDemandMoreInfo() {
    this.totaldemandoverview.nativeElement.classList.toggle('moreinfo-active');
  }
  FLocationsMoreInfo() {
    this.flocationsoverview.nativeElement.classList.toggle('moreinfo-active');
  }
  ngOnInit(): void {}
}
