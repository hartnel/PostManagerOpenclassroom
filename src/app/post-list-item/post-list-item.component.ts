import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post : any;

  constructor() { }

  ngOnInit() {

  }

  love(){
    this.post.loveIts++;
  }

  dlove(){
    this.post.loveIts--;
  }

  getBackground(){
    if(this.post.loveIts<0){
      return "rgb(231, 148, 159)";
    }
    else if(this.post.loveIts>0){
      return "rgb(109, 235, 109)";
    }
  }

}
