import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demand',
  templateUrl: './demandDiscover.component.html',
  styleUrls: ['./demandDiscover.component.scss']
})
export class DemandDiscoverComponent {
  @ViewChild('mapmoreinfo') mapmoreinfo: ElementRef;
  @ViewChild('treemapmoreinfo') treemapmoreinfo: ElementRef;
  @ViewChild('dprofilemoreinfo') dprofilemoreinfo: ElementRef;
  @ViewChild('dactivitymoreinfo') dactivitymoreinfo: ElementRef;

  FMapMoreInfo() {
    this.mapmoreinfo.nativeElement.classList.toggle('moreinfo-active');
  }
  TreeMapMoreInfo() {
    this.treemapmoreinfo.nativeElement.classList.toggle('moreinfo-active');
  }
  DProfileMoreInfo() {
    this.dprofilemoreinfo.nativeElement.classList.toggle('moreinfo-active');
  }
  DActivityMoreInfo() {
    this.dactivitymoreinfo.nativeElement.classList.toggle('moreinfo-active');
  }
}

export const breadCrumbConstant = `Demand > Discover`;
