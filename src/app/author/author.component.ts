import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  public authors : Array<Author> = [];
  public keyword : string ="";
  constructor(private as:AuthorService) { }

  ngOnInit(): void {
    this.getAuthors(); 
  }

  getAuthors(){
   
    this.as.getAuthors()
    .subscribe({
      next : data => {
        this.authors = data
      },
      error : err => {
        console.log(err)
      }
    })
  
    //this.authors = this.as.getAuthors();
  }

  handleDelete(author : Author){
    this.as.deleteAuthor(author).subscribe({
      next: value => {
        //this.getAuthors();
        this.authors = this.authors.filter(a => a.id != author.id);
      }
    })
  }

  searchAuthors() {
    this.as.searchAuthors(this.keyword).subscribe({
      next : value => {
        this.authors=value;
      }
    })
  }
 

}
