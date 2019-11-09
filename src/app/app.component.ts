import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PostManager';
  posts = [
    {
      title: "Mon Premier Post",
      content: "Mollit nulla elit elit irure laboris commodo irure id magna pariatur dolor consectetur.",
      loveIts: 5,
      created_at: new Date()
    }, 

    {
      title: "Mon Second Post",
      content: "Ad Lorem et nostrud ex aliqua nisi sint.",
      loveIts: -2,
      created_at: new Date()
    }, 
    {
      title: "Encore un Post",
      content: "Aliqua ex exercitation ex eiusmod et dolor cillum et ut ex.",
      loveIts: 0,
      created_at: new Date()
    }, 

  ]
}
