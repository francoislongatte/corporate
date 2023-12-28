import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSectionComponent } from './carousel.component';

describe('IconSectionComponent', () => {
  let component: IconSectionComponent;
  let fixture: ComponentFixture<IconSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconSectionComponent]
    });
    fixture = TestBed.createComponent(IconSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
