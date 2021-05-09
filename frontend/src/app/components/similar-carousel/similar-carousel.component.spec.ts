import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarCarouselComponent } from './similar-carousel.component';

describe('SimilarCarouselComponent', () => {
  let component: SimilarCarouselComponent;
  let fixture: ComponentFixture<SimilarCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
