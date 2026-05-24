import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnavbarComponent } from './pnavbar.component';

describe('PnavbarComponent', () => {
  let component: PnavbarComponent;
  let fixture: ComponentFixture<PnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
