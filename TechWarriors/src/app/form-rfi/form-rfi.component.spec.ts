import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRfiComponent } from './form-rfi.component';

describe('FormRfiComponent', () => {
  let component: FormRfiComponent;
  let fixture: ComponentFixture<FormRfiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRfiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
