import { Component } from '@angular/core';
import { Author } from './authors/model/author';
import { AuthorService } from './authors/services/author.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authors?: Array<Author> = [] ;
  selectedAuthor: Author | undefined;
 constructor(private service: AuthorService){}

 receiveMessage(author: Author)
 {
  this.service.getAuthors().subscribe(data=>{
    this.authors = data;
  })
 }

}
