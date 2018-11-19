import { Routes } from '@angular/router';
import { StoresComponent } from './stores.component';

export const StoresRoutes: Routes = [{
    path: '',
    component: StoresComponent,
    data: {
      heading: 'Stores',
      removeFooter: true
    }
  }];