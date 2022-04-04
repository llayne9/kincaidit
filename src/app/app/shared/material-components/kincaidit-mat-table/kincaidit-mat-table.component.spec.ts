import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KincaiditMatTableComponent } from './kincaidit-mat-table.component';

describe('KincaiditMatTableComponent', () => {
  let component: KincaiditMatTableComponent;
  let fixture: ComponentFixture<KincaiditMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KincaiditMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KincaiditMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
