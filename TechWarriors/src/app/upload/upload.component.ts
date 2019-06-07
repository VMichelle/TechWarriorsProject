import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';
import { Upload } from './upload.module';
// import { range } from 'rxjs';
import * as _ from "lodash";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  currentUpload: Upload;
  dropzoneActive:boolean = false;
//   constructor() { }
  constructor(private upSvc: UploadService) { }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleDrop(fileList: FileList) {
    // _. this replaced "for" on oringal
    let filesIndex = _.range(fileList.length);

    // _. this replace for on original
    // _.each(filesIndex, (idx) => {
    //   this.currentUpload = new Upload(fileList[idx]);
    // //   this.upSvc.pushUpload(this.currentUpload)}
    // )
  }
  

  ngOnInit() {
  }
}