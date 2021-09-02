import { NgModule, OnInit } from '@angular/core';
import { Routes, Router, RouterModule, NavigationEnd } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { DemandOverviewComponent } from './pages/demand/demand-overview/demandOverview.component';
import { DemandDiscoverComponent } from './pages/demand/demand-discover/demandDiscover.component';
import { DemandReportsComponent } from './pages/demand/demand-reports/demandReports.component';
import { DemandReportsWavechartComponent } from './pages/demand/demand-reports-wavechart/demandReportsWavechart.component';
import { DemandReportsTotalDemandComponent } from './pages/demand/demand-reports-totaldemand/demandReportsTotalDemand.component';

import { OutboundOverviewComponent } from './pages/outbound/outbound-overview/outboundOverview.component';
import { OutboundDiscoverComponent } from './pages/outbound/outbound-discover/outboundDiscover.component';
import { OutboundReportsComponent } from './pages/outbound/outbound-reports/outboundReports.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: '8Main Page', breadcrumb: 'Dashboard' }
  },
  {
    path: 'demandOverview',
    component: DemandOverviewComponent,
    data: { title: '1Main Page', breadcrumb: 'Overview' }
  },
  {
    path: 'demandDiscover',
    component: DemandDiscoverComponent,
    data: { title: '2Main Page', breadcrumb: 'Discover' }
  },
  {
    path: 'demandReports',
    component: DemandReportsComponent,
    data: { title: '3Main Page', breadcrumb: 'Reports' }
  },
  {
    path: 'demandReportsWavechart',
    component: DemandReportsWavechartComponent,
    data: { title: '9Main Page', breadcrumb: 'Reports Wave Chart' }
  },
  {
    path: 'demandReportsTotalDemand',
    component: DemandReportsTotalDemandComponent,
    data: { title: '4Main Page', breadcrumb: 'Report Total Demand' }
  },
  {
    path: 'outboundOverview',
    component: OutboundOverviewComponent,
    data: { title: '5Main Page', breadcrumb: 'Overview' }
  },
  {
    path: 'outboundDiscover',
    component: OutboundDiscoverComponent,
    data: { title: '7Main Page', breadcrumb: 'Discover' }
  },
  {
    path: 'outboundReports',
    component: OutboundReportsComponent,
    data: { title: '6Main Page', breadcrumb: 'Reports' }
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  public href: string = '';
  public url = '';

  constructor(private router: Router) {
    router.events.subscribe(route => {
      if (route instanceof NavigationEnd) {
        this.url = route.url;
        if (this.url && this.url.length > 0) {
          this.url = this.url.slice(1);
        }
      }
    });
  }

  ngOnInit() {
    this.href = this.router.url;
  }
}
