import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';  
import { Author } from '../model/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
 
  authors : Array<Author> = [];
  localAuthors : Array<Author> = [];
  Au_ID?: number ;
  selectedAuthor: Author | undefined;
  constructor(private as:AuthorService,private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getAuthors()  
  }

  getAuthors(){ 
    this.as.getAuthors()
    .subscribe({
      next : data => {
        this.authors = data 
        this.localAuthors = data ; 
      },
      error : err => {
        console.log(err)
      }
    }) 
  }

  handleDelete(author : Author){
    this.as.deleteAuthor(author).subscribe({
      next: value => {
        this.getAuthors();
        this.localAuthors = this.authors.filter(a => a.Au_ID != author.Au_ID);
      }
    })
  }

  searchAuthors() {
    this.as.searchAuthors(this.Au_ID!).subscribe({
      next : value => {
        this.authors;
        this.localAuthors = [];
        if(value != null)
          this.localAuthors.push(value); 
      }
    })
  }

  handleEdit(author: Author) {
    this.selectedAuthor = author;
  }
  
}
