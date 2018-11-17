import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DatatableRoutes } from './datatable.routing';
import { DataTableComponent } from './data-table/data-table.component';
import { TableEditingComponent } from './table-editing/table-editing.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TablePagingComponent } from './table-paging/table-paging.component';
import { TablePinningComponent } from './table-pinning/table-pinning.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';
import { TableSortingComponent } from './table-sorting/table-sorting.component';
import { PagingwithserviceComponent } from './pagingwithservice/pagingwithservice.component';
import { PaginationtestingComponent } from './paginationtesting/paginationtesting.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DatatableRoutes),
    NgxDatatableModule,
    NgbModule
  ],
  declarations: [
    DataTableComponent,
    TableEditingComponent,
    TableFilterComponent,
    TablePagingComponent,
    TablePinningComponent,
    TableSelectionComponent,
    TableSortingComponent,
    PagingwithserviceComponent,
    PaginationtestingComponent
  ]
})

export class DatatableModule {}
