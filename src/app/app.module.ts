import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { DashboardComponent } from './pages/dashboard.component';

import { DemandOverviewComponent } from './pages/demand/demand-overview/demandOverview.component';
import { DemandDiscoverComponent } from './pages/demand/demand-discover/demandDiscover.component';
import { DemandReportsComponent } from './pages/demand/demand-reports/demandReports.component';
import { DemandReportsWavechartComponent } from './pages/demand/demand-reports-wavechart/demandReportsWavechart.component';
import { DemandReportsTotalDemandComponent } from './pages/demand/demand-reports-totaldemand/demandReportsTotalDemand.component';
import { DemandReportsLocationsComponent } from './pages/demand/demand-reports-locations/demandReportsLocations.component';

import { OutboundOverviewComponent } from './pages/outbound/outbound-overview/outboundOverview.component';
import { OutboundDiscoverComponent } from './pages/outbound/outbound-discover/outboundDiscover.component';
import { OutboundReportsComponent } from './pages/outbound/outbound-reports/outboundReports.component';

import { HubsComponent } from './pages/hubs/hubs/hubs.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DemandOverviewComponent,
    DemandDiscoverComponent,
    DemandReportsComponent,
    DemandReportsWavechartComponent,
    DemandReportsTotalDemandComponent,
    HubsComponent,
    DemandReportsLocationsComponent,
    OutboundOverviewComponent,
    OutboundDiscoverComponent,
    OutboundReportsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
