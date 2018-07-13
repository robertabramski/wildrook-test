import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityGraphComponent } from './severity-graph.component';

describe('SeverityGraphComponent', () => {
  let component: SeverityGraphComponent;
  let fixture: ComponentFixture<SeverityGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverityGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
