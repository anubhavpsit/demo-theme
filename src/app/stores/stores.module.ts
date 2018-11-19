import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './stores.component';
import { StoresRoutes } from './stores.routing';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(StoresRoutes), SidebarModule
  ],
  declarations: [StoresComponent]
})
export class StoresModule { }
