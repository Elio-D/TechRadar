import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechViewerComponent } from './tech-viewer.component';

describe('TechViewerComponent', () => {
  let component: TechViewerComponent;
  let fixture: ComponentFixture<TechViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
