import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
@HostBinding('attr.class') cssClass = 'row';
// votes: number;
// title: string;
// link: string;

//article: Article;
@Input() article: Article;

  constructor() { 
    // this.title = 'Angular 5';
    // this.link = 'http://angular.io';
    // this.votes = 10;
    
    //this.article = new Article('Angular 5', 'http://angular.io', 10);  // --> article is populated by the Input now, so we don't need anything here
  }
 
  voteUp(): boolean{
    //  this.votes += 1;
    //this.article.votes += 1;
    this.article.voteUp();
     return false;
  }

  voteDown(): boolean{
    //this.votes -= 1; 
    //this.article.votes -= 1;
    this.article.voteDown();
    return false;
  }
  
  ngOnInit() {
  }

}
