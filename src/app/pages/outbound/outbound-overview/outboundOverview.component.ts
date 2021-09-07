import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'outbound-overview',
  templateUrl: './outboundOverview.component.html',
  styleUrls: ['./outboundOverview.component.scss']
})
export class OutboundOverviewComponent {
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
