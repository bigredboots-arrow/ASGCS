import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from './common/global-constants';
import {
  SidePanelState,
  DashboardLayoutConfiguration,
  SidePanelPosition
} from './core';
import { NavigationLink } from './shared';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  breadCrumb = GlobalConstants.breadCrumb;

  public configuration: DashboardLayoutConfiguration;
  public links: NavigationLink[];

  constructor() {
    this.configuration = new DashboardLayoutConfiguration(
      SidePanelPosition.LEFT,
      SidePanelState.OPEN
    );
  }

  ngOnInit() {}
}
