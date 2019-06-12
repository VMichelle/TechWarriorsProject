import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-public-content',
  templateUrl: './public-content.component.html',
  styleUrls: ['./public-content.component.scss']
})
export class PublicContentComponent implements OnInit {

  items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.firebaseService.getFiles()
    .subscribe(result => {
      this.items = result;
    })
  }

//view single content
  viewDetails(item: { payload: { doc: { id: string; }; }; }){
    this.router.navigate(['/details/'+ item.payload.doc.id]);
    console.log(this.viewDetails);
  }

}
