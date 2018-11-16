import { Component, OnInit } from '@angular/core';
import { PagingService } from '../../service/paging.service';

@Component({
  selector: 'app-pagingwithservice',
  templateUrl: './pagingwithservice.component.html',
  styleUrls: ['./pagingwithservice.component.scss']
})
export class PagingwithserviceComponent implements OnInit {

  rows = [];
  count = 0;
  offset = 0;
  limit = 3;
  constructor(private pagingservice: PagingService) { }


  ngOnInit() {
    this.page(this.offset, this.limit);
  }

  page(offset, limit) {
    var req_object = [];
    req_object['offset'] = offset;
    this.pagingservice.fetch(req_object, (results) => {
      this.count = results.total;
      var rows = [];
      for (let i = 0; i < limit; i++) {
        rows[i] = results.data[i];
      }
 
      this.rows=rows;
    });
  }

  onPage(event) {
    console.log('Page Event', event);
    this.offset = event.offset;
    this.page(event.offset, event.limit);
  }
}
