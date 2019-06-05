import { Component, OnInit } from '@angular/core';
export interface Content {
  title: string;
  description: string;
  url: string;
}
let firstName: string;

const ELEMENT_DATA: Content[] = [
  {title: 'Title',
   description: 'Hard coded description here.',
    url: 'https//docs.google.com/document/d/1MPp5hU2rdMlY073144XDEtZ2hAW4j3W9dHoIqnWxK54/edit?usp=sharing'},
  {title: 'Title2',
  description: '2Hard coded description here.',
  url: 'https//docs.google.com/document/d/1MPp5hU2rdMlY073144XDEtZ2hAW4j3W9dHoIqnWxK54/edit?usp=sharing'},
];
@Component({
  selector: 'app-public-content',
  templateUrl: './public-content.component.html',
  styleUrls: ['./public-content.component.scss']
})
export class PublicContentComponent implements OnInit {
   firstName = 'Mary';
  displayedColumns: string[] = ['title', 'description', 'url'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
