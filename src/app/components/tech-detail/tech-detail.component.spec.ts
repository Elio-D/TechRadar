import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDetailUserComponent } from './tech-detail-user.component';

describe('TechDetailUserComponent', () => {
  let component: TechDetailUserComponent;
  let fixture: ComponentFixture<TechDetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechDetailUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
