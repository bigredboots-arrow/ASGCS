import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.scss']
})
export class HubsComponent {
  @ViewChild('flocationsoverview') flocationsoverview: ElementRef;

  FLocationsMoreInfo() {
    this.flocationsoverview.nativeElement.classList.toggle('moreinfo-active');
  }
  ngOnInit(): void {}
}
