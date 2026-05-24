import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailproduitComponent } from './detailproduit.component';

describe('DetailproduitComponent', () => {
  let component: DetailproduitComponent;
  let fixture: ComponentFixture<DetailproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
