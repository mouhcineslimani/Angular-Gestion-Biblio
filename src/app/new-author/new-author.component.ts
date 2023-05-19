import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthorService } from '../services/author.service';
import { Author } from '../model/author.model';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {

  public authorForm!:FormGroup;

  constructor(private fb: FormBuilder, private as:AuthorService) { 

  }

  ngOnInit(): void {
    this.authorForm = this.fb.group({
      id: this.fb.control('', [Validators.required]),
      author: this.fb.control('', [Validators.required]),
      year_born: this.fb.control('', [Validators.required]),
    })
  }

  saveAuthor(){
    let author: Author = this.authorForm.value;
    this.as.saveAuthor(author).subscribe({
      next : data => {
        alert(JSON.stringify(data));
      }, error :err => {
        console.log(err);
      }
    });
  }

}
