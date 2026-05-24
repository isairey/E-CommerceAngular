import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconnecterComponent } from './seconnecter.component';

describe('SeconnecterComponent', () => {
  let component: SeconnecterComponent;
  let fixture: ComponentFixture<SeconnecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeconnecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconnecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
