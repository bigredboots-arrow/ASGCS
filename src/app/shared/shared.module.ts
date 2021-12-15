import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GridContainerComponent } from './components/grid/grid-container/grid-container.component';
import { GridCellDirective } from './components/grid/grid-cell/grid-cell.directive';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavigationSidePanelComponent } from './components/navigation-side-panel/navigation-side-panel.component';
import { SingleDoubleClickDirective } from './directives/single-double-click.directive';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DonutComponent } from './components/charts/donut-chart/donut-chart.component';

@NgModule({
  declarations: [
    GridContainerComponent,
    GridCellDirective,
    NavigationBarComponent,
    NavigationSidePanelComponent,
    SingleDoubleClickDirective,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    DonutComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    GridContainerComponent,
    GridCellDirective,
    NavigationBarComponent,
    NavigationSidePanelComponent,
    SingleDoubleClickDirective,
    HeaderComponent,
    SidebarComponent,
    DonutComponent
  ]
})
export class SharedModule {}
 