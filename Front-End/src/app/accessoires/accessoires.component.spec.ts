import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoiresComponent } from './accessoires.component';

describe('AccessoiresComponent', () => {
  let component: AccessoiresComponent;
  let fixture: ComponentFixture<AccessoiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
