import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MescommandesComponent } from './mescommandes.component';

describe('MescommandesComponent', () => {
  let component: MescommandesComponent;
  let fixture: ComponentFixture<MescommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MescommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MescommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
