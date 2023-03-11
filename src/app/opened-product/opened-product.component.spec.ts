import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedProductComponent } from './opened-product.component';

describe('OpenedProductComponent', () => {
  let component: OpenedProductComponent;
  let fixture: ComponentFixture<OpenedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenedProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
