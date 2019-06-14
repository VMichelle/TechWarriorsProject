import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { _document } from '@angular/platform-browser/src/browser';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormBuilder, FormGroup } from '@angular/forms'
import { UserComment } from '../services/user-comment';
import * as firebase from 'firebase';


@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss']
})
export class ViewContentComponent implements OnInit {

  // submitComment: FormGroup;
  // commentInput: string;

  items: any;
  comments: any;

  // uid = firebase.auth().currentUser.uid;

  newComment: UserComment = {
    userInput: '',
    userName: ''
  }

  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.items = data.payload.data();
        this.items.id = data.payload.id;
      }
    });

    this.loadData();
    this.loadUserComments();

  }

  loadData() {
    this.firebaseService.sendOneFile().subscribe(res => {
      this.items = res.data();
      console.log(res);
      console.log(this.items)
    })
  }

  loadUserComments(){
    this.firebaseService.getUserComments().subscribe(res =>{
      this.comments = res.docs.map(function (documentSnapshot){
        return documentSnapshot.data();
      })
      console.log(res);
      console.log(this.comments);

    })
  }

  createComment(){
    this.firebaseService.createUserComment(this.newComment);
    this.newComment.userInput = '';
    this.newComment.userName = '';
    this.loadUserComments();
  }
  

}





