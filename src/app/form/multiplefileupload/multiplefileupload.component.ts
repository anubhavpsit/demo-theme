import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-multiplefileupload',
  templateUrl: './multiplefileupload.component.html',
  styleUrls: ['./multiplefileupload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiplefileuploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}
