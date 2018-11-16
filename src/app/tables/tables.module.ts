import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TablesRoutes } from './tables.routing';
import { BasicComponent } from './basic/basic.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { TablepaginationComponent } from './tablepagination/tablepagination.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes)
  ],
  declarations: [BasicComponent, ResponsiveComponent, TablepaginationComponent]
})

export class TablesModule {}
