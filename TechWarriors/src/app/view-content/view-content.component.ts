import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { _document } from '@angular/platform-browser/src/browser';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss']
})
export class ViewContentComponent implements OnInit {

  items: any;
  comments: any;

  newComment: {
    userId: string,
    userComment: string,
    userName: 'Guest User'
  }

  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private db: AngularFirestore
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

  submitComment(){
    
  }
  

}





