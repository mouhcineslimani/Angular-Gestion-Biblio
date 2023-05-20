import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent{
  publisherForm: FormGroup;
  apiUrl = 'http://localhost:3000/publishers';

  constructor(private http: HttpClient) { 
    this.publisherForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    entreprise: new FormControl('', Validators.required),
    
  });}

 

  addPublisher() {
    const publisherData = this.publisherForm.value;

    this.http.post(this.apiUrl, publisherData).subscribe(
      (response) => {
        console.log('Editeur bien Ajouté', response);
      },
      (error) => {
        console.error('Problème lors de lajout', error);
      }
    );
  }

  updatePublisher() {
    const publisherData = this.publisherForm.value;

    this.http.put(`${this.apiUrl}/${publisherData.id}`, publisherData).subscribe(
      (response) => {
        console.log('Editeur mis à jour', response);
      },
      (error) => {
        console.error('Problème lors de la mise à jour', error);
      }
    );
  }

  deletePublisher() {
    const publisherId = this.publisherForm.value.id;

    this.http.delete(`${this.apiUrl}/${publisherId}`).subscribe(
      (response) => {
        console.log('Editeur supprimé', response);
      },
      (error) => {
        console.error('Problème lors de la suppression', error);
      }
    );
  }

  
}
