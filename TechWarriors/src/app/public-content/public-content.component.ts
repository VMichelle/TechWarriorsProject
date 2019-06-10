import { Component, OnInit } from '@angular/core';
import { MockResourceLoader } from '@angular/compiler/testing';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

export interface Content {
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
}

const ELEMENT_DATA: Content[] = [
  {title: 'Michele at Work',
   description: 'Michele works on her group Music Application project.',
  url: 'read more...',
  image: '',
  type: 'Image'},
  {title: 'Terchele at Work',
  description: 'Michele has a twin sister who wore the same outfit on the same day.',
  url: 'read more...',
  image: '',
  type: 'Google Doc'},
];

@Component({
  selector: 'app-public-content',
  templateUrl: './public-content.component.html',
  styleUrls: ['./public-content.component.scss']
})
export class PublicContentComponent implements OnInit {

  items: Array<any>;
  //  firstName = 'Mary';
  // displayedColumns: string[] = ['image', 'title', 'type', 'description', 'url' ];
  // dataSource = ELEMENT_DATA;
  // panelOpenState = false;
  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.firebaseService.getFiles()
      .subscribe(result => {
        this.items = result;
      })
  }

}
