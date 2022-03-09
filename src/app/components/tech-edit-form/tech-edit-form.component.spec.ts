import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechEditFormComponent } from './tech-edit-form.component';

describe('TechDetailComponent', () => {
  let component: TechDetailComponent;
  let fixture: ComponentFixture<TechDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
