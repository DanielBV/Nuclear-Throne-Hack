import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutationSelectorComponent } from './mutation-selector.component';

describe('MutationSelectorComponent', () => {
  let component: MutationSelectorComponent;
  let fixture: ComponentFixture<MutationSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutationSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
