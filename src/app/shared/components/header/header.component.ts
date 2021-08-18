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

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('overview') overview: ElementRef;
  @ViewChild('filters') filters: ElementRef;

  constructor() {}

  toggleSidebar() {
    this.overview.nativeElement.classList.toggle('sidebar-active');
  }
  toggleFilters() {
    this.filters.nativeElement.classList.toggle('filter-active');
  }

  ngOnInit(): void {}
}
