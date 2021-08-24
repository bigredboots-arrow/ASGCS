import { NgModule, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard.component';
import { DemandOverviewComponent } from './pages/demand/demand-overview/demandOverview.component';
import { DemandDiscoverComponent } from './pages/demand/demand-discover/demandDiscover.component';
import { DemandReportsComponent } from './pages/demand/demand-reports/demandReports.component';

import { OutboundOverviewComponent } from './pages/outbound/outbound-overview/outboundOverview.component';
import { OutboundDiscoverComponent } from './pages/outbound/outbound-discover/outboundDiscover.component';
import { OutboundReportsComponent } from './pages/outbound/outbound-reports/outboundReports.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      breadcrumb: 'Dashydash'
    }
  },
  {
    path: 'demandOverview',
    component: DemandOverviewComponent,
    data: {
      breadcrumb: 'Manufacturing Sites > Overview'
    }
  },
  {
    path: 'demandDiscover',
    component: DemandDiscoverComponent,
    data: {
      breadcrumb: 'Manufacturing Sites > Discover'
    }
  },
  {
    path: 'demandReports',
    component: DemandReportsComponent,
    data: {
      breadcrumb: 'Manufacturing Sites > Reports'
    }
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



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {
  
  public href: string = '';
  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
  }
}
