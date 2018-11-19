import { Routes } from '@angular/router';
import { ListstoreComponent } from './liststore/liststore.component';
import { CreatestoreComponent } from './createstore/createstore.component';

export const StoreRoutes: Routes = [{
    path: '',
    component: ListstoreComponent,
    data: {
      heading: 'Liststore'
    }
  }, {
    path: 'create',
    component: CreatestoreComponent,
    data: {
      heading: 'Create'
    }
  }];