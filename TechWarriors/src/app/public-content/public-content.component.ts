import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-public-content',
  templateUrl: './public-content.component.html',
  styleUrls: ['./public-content.component.scss']
})
export class PublicContentComponent implements OnInit {

  items: Array<any>;

  id: string;

  contentId: any;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getData();
    
    // this.route.paramMap.subscribe(params => {
    //    this.firebaseService.getFile(params.get('id')).subscribe(res =>{
    //       console.log(res);
    //       })   
    //   });
    
   
  }

  getData(){
    this.firebaseService.getFiles()
    .subscribe(result => {
      this.items = result;
      console.log(this.items)
    })
  }

  viewDetails(item){
    // console.log('was clicked')
    // console.log(item.payload.doc.id)
    // this.contentId = item;
    // console.log(this.contentId);
    window.open(item.payload.doc.data().downloadURL, '_blank');
  }

}
