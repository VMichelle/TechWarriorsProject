import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
// import { Title } from '@angular/platform-browser';
import {  UploaderService } from '../services/uploader.service'
import { Router } from '@angular/router';


@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

  exampleForm: FormGroup;

  isHovering: boolean;

  files: File[] = [];

  fileInfo: Object[] = [];

  // validation_messages = {
  //   'title': [
  //     { type: 'required', message: 'Title is required.' }
  //   ],
  //   'description': [
  //     { type: 'required', message: 'Description is required.' }
  //   ]
  // };

  constructor(private fb: FormBuilder, private router: Router, public UploaderService: UploaderService) { 
    const form = new FormGroup({ 
      title: new FormControl(), 
      description: new FormControl() }); 
    }

    ngOnInit() {
      this.createForm();
    }

    createForm() {
      this.exampleForm = this.fb.group({
        title: [''],
        description: ['']
      });
    }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  resetFields(){
    this.exampleForm = this.fb.group({
      title: new FormControl(''),
      description: new FormControl('')
    });
  }
  
  onDrop(files: FileList
    ) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
    console.log('onDrop happend');
  }

  addFile(file){
    this.fileInfo.push(file)
  }

  onSubmit(){
    this.UploaderService.createFile(this.exampleForm.value, this.fileInfo)
    .then(
      res => {
        console.log(res);
        this.resetFields();
        this.router.navigate(['/content']);
    console.log('onSubmit happend');
      }).catch(err=> console.log(err)).finally(() => console.log('done'))
    
  }
}