import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedListComponent } from './top-rated-list.component';

describe('TopRatedListComponent', () => {
  let component: TopRatedListComponent;
  let fixture: ComponentFixture<TopRatedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRatedListComponent]
    });
    fixture = TestBed.createComponent(TopRatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
