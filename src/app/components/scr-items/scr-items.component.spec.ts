import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrItemsComponent } from './scr-items.component';

describe('ScrItemsComponent', () => {
  let component: ScrItemsComponent;
  let fixture: ComponentFixture<ScrItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
