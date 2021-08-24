import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  Input
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GlobalConstants } from '../../../common/global-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('overview') overview: ElementRef;
  @ViewChild('filters') filters: ElementRef;

  breadCrumb = GlobalConstants.breadCrumb;

  constructor() {}

  toggleSidebar() {
    this.overview.nativeElement.classList.toggle('sidebar-active');
  }
  toggleFilters() {
    this.filters.nativeElement.classList.toggle('filter-active');
    this.overview.nativeElement.classList.toggle('filter-active');
  }

  myBreadCrumb = this.breadCrumb;

  ngOnInit(): void {}
}
