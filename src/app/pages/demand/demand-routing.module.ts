import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandComponent } from './demand/demand.component';
import { DemandOverviewComponent } from './demand-overview/demandOverview.component';
import { DemandDiscoverComponent } from './demand-discover/demandDiscover.component';
import { DemandReportsComponent } from './demand-reports/demandReports.component';
import { DemandReportsWavechartComponent } from './demand-reports-wavechart/demandReportsWavechart.component';

const routes: Routes = [
  { path: '', redirectTo: 'demand', pathMatch: 'full' },
  {
    path: 'demand',
    component: DemandComponent,
    children: [
      { path: '', redirectTo: 'overview' },
      { path: 'overview', component: DemandOverviewComponent },
      { path: 'discover', component: DemandDiscoverComponent },
      { path: 'reports', component: DemandReportsComponent },
      { path: 'reportsWavechart', component: DemandReportsWavechartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandRoutingModule {}
