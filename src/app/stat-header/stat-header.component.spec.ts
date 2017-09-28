import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatHeaderComponent } from './stat-header.component';

describe('StatHeaderComponent', () => {
  let component: StatHeaderComponent;
  let fixture: ComponentFixture<StatHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
