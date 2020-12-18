import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysortingComponent } from './categorysorting.component';

describe('CategorysortingComponent', () => {
  let component: CategorysortingComponent;
  let fixture: ComponentFixture<CategorysortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorysortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
