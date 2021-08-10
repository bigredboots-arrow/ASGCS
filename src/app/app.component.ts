import { Component } from '@angular/core';
import {
  SidePanelState,
  DashboardLayoutConfiguration,
  SidePanelPosition
} from './core';
import { NavigationLink } from './shared';
import { ProgressBarFill, ProgressBarService } from './library/components';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public configuration: DashboardLayoutConfiguration;
  public links: NavigationLink[];
  public progressFill: ProgressBarFill = ProgressBarFill.INFO;

  constructor(private _progressBarService: ProgressBarService) {
    this.configuration = new DashboardLayoutConfiguration(
      SidePanelPosition.LEFT,
      SidePanelState.OPEN
    );
  }
}
