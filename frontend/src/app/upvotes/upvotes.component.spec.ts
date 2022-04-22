import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvotesComponent } from './upvotes.component';

describe('UpvotesComponent', () => {
  let component: UpvotesComponent;
  let fixture: ComponentFixture<UpvotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpvotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
