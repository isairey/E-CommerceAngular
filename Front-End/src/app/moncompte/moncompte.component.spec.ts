import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoncompteComponent } from './moncompte.component';

describe('MoncompteComponent', () => {
  let component: MoncompteComponent;
  let fixture: ComponentFixture<MoncompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoncompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoncompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
