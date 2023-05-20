import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablepublishersComponent } from './tablepublishers/tablepublishers.component';
import { ImagepublishersComponent } from './imagepublishers/imagepublishers.component';
import { AddPublisherComponent } from './path/to/add-publisher.component';


@NgModule({
  declarations: [
    AppComponent,
    TablepublishersComponent,
    ImagepublishersComponent,
    AddPublisherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
