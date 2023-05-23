import { Component, EventEmitter, Input, OnInit , Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {

  public authorForm!:FormGroup; 
  @Input() author: Author | undefined;
  
  constructor(private fb: FormBuilder, private as:AuthorService) { 

  }

  ngOnInit(): void {
    this.authorForm = this.fb.group({
      Au_ID: this.fb.control(''),
      Author: this.fb.control(''),
      Year_Born: this.fb.control(''),
    });
    if (this.author) {
      this.setAuthor(this.author);
    }
  }

  saveAuthor(){ 
    let author: Author = this.authorForm.value;
    console.log(author);
    this.as.saveAuthor(author).subscribe({
      next : data => {
        alert(JSON.stringify(data)); 
      }, error :err => {
        console.log(err);
      }
    });
  }

  setAuthor(author: Author) {
    this.authorForm.patchValue(author);
  }

}
