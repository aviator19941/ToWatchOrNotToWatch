import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWatchingCarouselComponent } from './continue-watching-carousel.component';

describe('ContinueWatchingCarouselComponent', () => {
  let component: ContinueWatchingCarouselComponent;
  let fixture: ComponentFixture<ContinueWatchingCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinueWatchingCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueWatchingCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
