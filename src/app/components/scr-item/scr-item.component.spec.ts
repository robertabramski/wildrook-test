import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrItemComponent } from './scr-item.component';

describe('ScrItemComponent', () => {
  let component: ScrItemComponent;
  let fixture: ComponentFixture<ScrItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
