import { Component, OnInit,ViewChild } from '@angular/core';
import { PagingService } from '../../service/paging.service';
//import { PaginationtestComponent } from '../../components/paginationtest/paginationtest.component';

@Component({
  selector: 'app-paginationtesting',
  templateUrl: './paginationtesting.component.html',
  styleUrls: ['./paginationtesting.component.scss']
})
export class PaginationtestingComponent implements OnInit {


  itemsPerPage: number;
  totalItems: any;
  page: any;
  previousPage: any;

  rows = [];
  count = 0;
  offset = 0;
  limit = 3;

  constructor(private pagingservice: PagingService) {
    this.itemsPerPage = 3;
    this.totalItems = 0;
    this.page = 1;
    this.previousPage = 0;
   }

  ngOnInit() {
    this.loadPage(this.page);
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }  

  loadData() {
    var req_object = [];
    req_object['offset'] = this.page;
    
    this.pagingservice.fetch(req_object, (results) => {
      this.count = results.total;
      var rows = [];
      for (let i = 0; i < this.itemsPerPage; i++) {
        rows[i] = results.data[i];
      }
 
      this.rows=rows;
      console.log(this.rows);
      
    });
  }
  
  
  loadDatass(offset, limit) {
    var req_object = [];
    req_object['offset'] = offset;
    this.pagingservice.fetch(req_object, (results) => {
      this.count = results.total;
      var rows = [];
      for (let i = 0; i < limit; i++) {
        rows[i] = results.data[i];
      }
 
      this.rows=rows;
      console.log(this.rows);
      
    });
  }

  
  loadPagess(page: number) {
     console.log('Page Event', event);
    console.dir(event);
      // this.offset = offset + 1;
      // console.log(offset);
    //  if(offset==0)
    //  {
    //   this.offset = offset + 1;
    //   this.page(offset, this.limit);
    // }
    // else
    // {
    //   this.offset = offset;
    //   this.page(offset, this.limit);
    // }
   }
 
  //  onPage(event) {
  //    console.dir(event);
  //    console.log('Page Event', event);
  //    this.offset = event.offset;
  //    this.page(event.offset, event.limit);
  //  }

}
