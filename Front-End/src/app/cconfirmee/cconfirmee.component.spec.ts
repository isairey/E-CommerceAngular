import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CconfirmeeComponent } from './cconfirmee.component';

describe('CconfirmeeComponent', () => {
  let component: CconfirmeeComponent;
  let fixture: ComponentFixture<CconfirmeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CconfirmeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CconfirmeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
