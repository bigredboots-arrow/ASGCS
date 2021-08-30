import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DemandComponent } from './demand/demand.component';
import { DemandRoutingModule } from './demand-routing.module';
import { DemandOverviewComponent } from './demand-overview/demandOverview.component';
import { DemandDiscoverComponent } from './demand-discover/demandDiscover.component';
import { DemandReportsComponent } from './demand-reports/demandReports.component';
import { DemandReportsWavechartComponent } from './demand-reports-wavechart/demandReportsWavechart.component';

@NgModule({
  imports: [CommonModule, DemandRoutingModule],
  declarations: [
    DemandOverviewComponent,
    DemandDiscoverComponent,
    DemandReportsComponent,
    DemandReportsWavechartComponent
  ]
})
export class ExamModule {}
