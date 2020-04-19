import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourserowComponent } from './courserow.component';

describe('CourserowComponent', () => {
  let component: CourserowComponent;
  let fixture: ComponentFixture<CourserowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourserowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourserowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
