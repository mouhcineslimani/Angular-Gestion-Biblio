import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ""
  actions : Array<any> = [
    {title : "Home", "route" : "/home"},
    {title : "Authors", "route" : "/author"},
    {title : "new Author", "route" : "/new-author"},
  ];

  currentAction : any;

  setCurrentAction(action : any){
    this.currentAction = action;
  }
}
