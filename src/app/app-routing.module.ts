import { NgModule, OnInit, Renderer2 } from '@angular/core';
import { Routes, Router, RouterModule, NavigationStart } from '@angular/router';

import { DashboardComponent } from './pages/dashboard.component';
import { DemandOverviewComponent } from './pages/demand/demand-overview/demandOverview.component';
import { DemandDiscoverComponent } from './pages/demand/demand-discover/demandDiscover.component';
import { DemandReportsComponent } from './pages/demand/demand-reports/demandReports.component';
import { DemandReportsWavechartComponent } from './pages/demand/demand-reports-wavechart/demandReportsWavechart.component';

import { OutboundOverviewComponent } from './pages/outbound/outbound-overview/outboundOverview.component';
import { OutboundDiscoverComponent } from './pages/outbound/outbound-discover/outboundDiscover.component';
import { OutboundReportsComponent } from './pages/outbound/outbound-reports/outboundReports.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'demandOverview',
    component: DemandOverviewComponent
  },
  {
    path: 'demandDiscover',
    component: DemandDiscoverComponent
  },
  {
    path: 'demandReports',
    component: DemandReportsComponent
  },
  {
    path: 'demandReportsWavechart',
    component: DemandReportsWavechartComponent
  },
  {
    path: 'outboundOverview',
    component: OutboundOverviewComponent
  },
  {
    path: 'outboundDiscover',
    component: OutboundDiscoverComponent
  },
  {
    path: 'outboundReports',
    component: OutboundReportsComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
export class AppComponent {
  previousUrl: string;

  constructor(private renderer: Renderer2, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.previousUrl) {
          this.renderer.removeClass(document.body, this.previousUrl);
        }
        let currentUrlSlug = event.url.slice(1);
        if (currentUrlSlug) {
          this.renderer.addClass(document.body, currentUrlSlug);
        }
        this.previousUrl = currentUrlSlug;
      }
    });
  }
}
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  public href: string = '';
  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
  }
}
