import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbreadcrumComponent } from './productbreadcrum.component';

describe('ProductbreadcrumComponent', () => {
  let component: ProductbreadcrumComponent;
  let fixture: ComponentFixture<ProductbreadcrumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbreadcrumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbreadcrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
