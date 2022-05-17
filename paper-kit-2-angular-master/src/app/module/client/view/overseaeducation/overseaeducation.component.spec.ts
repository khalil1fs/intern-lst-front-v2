import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverseaeducationComponent } from './overseaeducation.component';

describe('OverseaeducationComponent', () => {
  let component: OverseaeducationComponent;
  let fixture: ComponentFixture<OverseaeducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverseaeducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverseaeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
