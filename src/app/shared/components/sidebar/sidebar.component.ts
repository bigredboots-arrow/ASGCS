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
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('overview') overview: ElementRef;
  constructor() {}

  toggleSidebar() {
    this.overview.nativeElement.classList.toggle('sidebar-active');
  }

  ngOnInit(): void {}
}
