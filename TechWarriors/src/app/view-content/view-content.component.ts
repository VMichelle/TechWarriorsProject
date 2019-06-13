import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.scss']
})
export class ViewContentComponent implements OnInit {

  item: any;

  constructor(
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    // private router: Router,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
      }
    })

    this.loadData();

    
    }

    loadData(){
      this.firebaseService.sendOneFile().subscribe(res =>{
        this.item = res;
        console.log(res);
      })
    }


  }





