import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { NewAuthorComponent } from './new-author/new-author.component';

const routes: Routes = [
  {path : "home" ,component : HomeComponent},
  {path : "author" ,component : AuthorComponent},
  {path : "new-author" ,component : NewAuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
