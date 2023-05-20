import { Component, OnInit } from '@angular/core';
import { PublisherService } from 'path/to/publisher.service';



@Component({
  selector: 'app-tablepublishers',
  templateUrl: './tablepublishers.component.html',
  styleUrls: ['./tablepublishers.component.css']
})
export class TablepublishersComponent implements OnInit {
  publishers: any[] = [];

  constructor(private publisherService: PublisherService) { }

  ngOnInit(): void {
    this.getPublishers();
  }

  getPublishers() {
    this.publisherService.getPublishers().subscribe(
      (data) => {
        this.publishers = data;
      },
      (error) => {
        console.error('Editeurs non trouvés', error);
      }
    );
  }

}
