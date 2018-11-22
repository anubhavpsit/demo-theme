import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-singlemap',
  templateUrl: './singlemap.component.html',
  styleUrls: ['./singlemap.component.scss']
})
export class SinglemapComponent implements OnInit {

  // lat = 28.6104712;
  // lng = 77.3841085;
  // latA = -34.754764;
  // lngA = 149.736246;
  //public show:boolean = false;

  zoom = 18;
  draggableCursor= 'pointer';

  latitude: any;
  longitude: any;
  closeResult: string;
  private modalRef: NgbModalRef;
  constructor(private modalService: NgbModal) {
    navigator.geolocation.getCurrentPosition((location) => {
      this.latitude = location.coords.latitude;
      this.longitude = location.coords.longitude;
    });
   }

  ngOnInit() {}

  mapClicked(event) {
      this.latitude = event.coords.lat;
      this.longitude = event.coords.lng;
      this.modalRef.close();
  }

  getMapLocation() {
    //this.show=false;
    console.log("Button clicked");
  }

 /*  changeCordinate(content) {
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {      
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } */

  changeCordinate(content) {
    this.modalRef = this.modalService.open(content,{size: 'lg'});
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  styles: any = [{
    featureType: 'all',
    stylers: [{
      saturation: -80
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      hue: '#00ffee'
    }, {
      saturation: 50
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }];

}
