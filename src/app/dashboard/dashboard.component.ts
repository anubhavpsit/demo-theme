import { Component, OnInit } from '@angular/core';
//import { Echo } from 'laravel-echo';
//import { Socket } from 'ng-socket-io';

// import {Echo} from 'laravel-echo'
// import * as io from 'socket.io-client';
//import { Socket } from '../shared/interfaces';
import * as shape from 'd3-shape';
import { colorSets  } from '@swimlane/ngx-charts/release/utils/color-sets';
import {
  single,
  generateData
} from '../core';
import { Observable } from 'rxjs/Observable';
import { MysocketService } from '../service/mysockets/mysocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {


  single: any[];
  graph: {
    links: any[],
    nodes: any[]
  };
  dateData: any[];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  roundDomains = false;
  colorScheme = {
    domain: [
    '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
    ]
  };
  schemeType = 'ordinal';
  // line interpolation
  curve = shape.curveLinear;
  // line, area
  timeline = false;
  // margin
  margin = false;
  marginTop = 40;
  marginRight = 40;
  marginBottom = 40;
  marginLeft = 40;
  // gauge
  gaugeMin = 0;
  gaugeMax = 50;
  gaugeLargeSegments = 10;
  gaugeSmallSegments = 5;
  gaugeTextValue = '';
  gaugeUnits = 'alerts';
  gaugeAngleSpan = 240;
  gaugeStartAngle = -120;
  gaugeShowAxis = true;
  gaugeValue = 50; // linear gauge value
  gaugePreviousValue = 70;

  //private echo: Echo;
//private socketService: MysocketService
  constructor(private socketService: MysocketService) {
    Object.assign(this, {
      single
    });
    this.dateData = generateData(5, false);
    console.log("I AM DASHBOARD");
    this.initIoConnection();
    console.log("I AM DASHBOARD END");
  }

  private initIoConnection(): void {
    this.socketService.initSocket();
    this.socketService.subscribeChannel('ListStatusUpdated','test-event-4')
    .subscribe((message) => {
      console.dir("Message");
      console.dir(message);
    });

  }

  ngOnInit(): void {
    // window['io'] = io;
    // this.echo = window['Echo'] = new Echo({
    //   client: io,
    //   broadcaster: 'socket.io',
    //   host: window.location.hostname + ':3001',
    // });
    //socketService.
    // this.socket.connect();
    // this.getMessages().subscribe(message => {
    //   //this.messages.push(message);
    //   console.dir(message);
    // });
  }

  // getMessages() {
  //   // let observable = new Observable(observer => {
  //   //   this.socket.on('ListStatusUpdated', (data) => {
  //   //     observer.next(data);
  //   //   });
  //   // })
  //   // return observable;

  //   let observable = new Observable(observer => {
  //     this.socket.on('test-event:App\Events\ListStatusUpdated', (data) => {
  //       observer.next(data);
  //     });
  //   })
  //   return observable;


  //   // console.dir("Added in A B");
  //   // const source = this.socket.fromEvent('ListStatusUpdated');
  //   // return source;

  // }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }
}
