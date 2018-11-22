import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-createstore',
  templateUrl: './createstore.component.html',
  styleUrls: ['./createstore.component.scss']
})
export class CreatestoreComponent implements OnInit {

  public show_camera_section:boolean = true;
  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;

  constructor() { this.captures = []; }

  ngOnInit() {}

  public ngAfterViewInit() {
  //   if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  //       navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  //           // this.video.nativeElement.src = window.URL.createObjectURL(stream);
  //           // this.video.nativeElement.play();
  //       });
  //   }
    //this.show_camera_section = false;
  }

  openCamera() {
    //this.show_camera_section = true;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.nativeElement.src = window.URL.createObjectURL(stream);
            this.video.nativeElement.play();
        });
    }
  }

  captureProductImage() {
      var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
      this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  }

}
