import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleviseurComponent } from './televiseur.component';

describe('TeleviseurComponent', () => {
  let component: TeleviseurComponent;
  let fixture: ComponentFixture<TeleviseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleviseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
