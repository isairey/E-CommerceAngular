import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdinateurComponent } from './ordinateur.component';

describe('OrdinateurComponent', () => {
  let component: OrdinateurComponent;
  let fixture: ComponentFixture<OrdinateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdinateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdinateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
