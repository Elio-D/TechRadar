import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechViewerUserComponent } from './tech-viewer-user.component';

describe('TechViewerUserComponent', () => {
  let component: TechViewerUserComponent;
  let fixture: ComponentFixture<TechViewerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechViewerUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechViewerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
