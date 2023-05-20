import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepublishersComponent } from './tablepublishers.component';

describe('TablepublishersComponent', () => {
  let component: TablepublishersComponent;
  let fixture: ComponentFixture<TablepublishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablepublishersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablepublishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
