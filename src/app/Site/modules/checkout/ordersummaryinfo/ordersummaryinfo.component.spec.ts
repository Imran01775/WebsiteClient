import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummaryinfoComponent } from './ordersummaryinfo.component';

describe('OrdersummaryinfoComponent', () => {
  let component: OrdersummaryinfoComponent;
  let fixture: ComponentFixture<OrdersummaryinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersummaryinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersummaryinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
