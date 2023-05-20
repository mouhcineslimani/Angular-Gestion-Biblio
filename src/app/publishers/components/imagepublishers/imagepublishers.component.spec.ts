import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagepublishersComponent } from './imagepublishers.component';

describe('ImagepublishersComponent', () => {
  let component: ImagepublishersComponent;
  let fixture: ComponentFixture<ImagepublishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagepublishersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagepublishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
