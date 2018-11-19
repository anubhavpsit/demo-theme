import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreatestoreComponent } from './createstore/createstore.component';
import { ListstoreComponent } from './liststore/liststore.component';
import { StoreRoutes } from './store.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StoreRoutes),
    NgbModule
  ],
  declarations: [CreatestoreComponent, ListstoreComponent]
})
export class StoreModule { }
