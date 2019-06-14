import { Injectable } from '@angular/core';
import { allFiles } from '../models/file.model'
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UploaderService {



  constructor(public db: AngularFirestore) { }

  createFile(value, files){
    console.log(files);
    return this.db.collection('files').add({
      title: value.title,
      description: value.description,
      files: files
    })
  }

 
}
