import {
  Component,
  Rou
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  Input
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GlobalConstants } from '../../../common/global-constants';
import { SidePanelService } from '../../../core/';
import { SidePanelState } from '../../../core/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _subscriptionsSubject$: Subject<void>;
  public currentPanelState: SidePanelState;

  constructor(private _sidePanelService: SidePanelService) {
    this._subscriptionsSubject$ = new Subject<void>();
  }

  @ViewChild('overview') overview: ElementRef;
  @ViewChild('filters') filters: ElementRef;

  breadCrumb = GlobalConstants.breadCrumb;

  toggleSidebar() {
    this.overview.nativeElement.classList.toggle('sidebar-active');
  }
  toggleFilters() {
    this.filters.nativeElement.classList.toggle('filter-active');
    this.overview.nativeElement.classList.toggle('filter-active');
  }

  myBreadCrumb = this.breadCrumb;

  ngOnInit(): void {
    this._sidePanelService.panelStateChanges
      .pipe(takeUntil(this._subscriptionsSubject$))
      .subscribe((state: SidePanelState) => (this.currentPanelState = state));
  }

  public handleSingleClicks(): void {
    const width: number = window.innerWidth;
    if (width < 768 && this.currentPanelState === SidePanelState.MOBILE) {
      this._sidePanelService.changeState(SidePanelState.MOBILEOPEN);
    } else if (this.currentPanelState === SidePanelState.MOBILEOPEN) {
      this._sidePanelService.changeState(SidePanelState.MOBILE);
    } else if (this.currentPanelState === SidePanelState.COLLAPSE) {
      this._sidePanelService.changeState(SidePanelState.OPEN);
    } else {
      this._sidePanelService.changeState(SidePanelState.COLLAPSE);
    }
  }

  ngOnDestroy(): void {
    this._subscriptionsSubject$.next();
    this._subscriptionsSubject$.complete();
  }
}
