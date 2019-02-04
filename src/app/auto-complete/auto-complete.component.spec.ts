import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteComponent } from './auto-complete.component';
import {AppModule} from '../../app.module';
import { EventEmitter } from '@angular/core';

describe('AutoCompleteComponent', () => {
  let component: AutoCompleteComponent;
  let fixture: ComponentFixture<AutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    component.items = ['Poject1', 'Project2', 'Project3', 'Untitled Project'];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('#setItem should emit itemSelection event', (done) => {
    const searchItem = 'Project';
    component.itemSelection.subscribe(response => {
      expect(response).toEqual(searchItem);
      done();
    });
    component.setItem(searchItem);
    expect(component.searchTerm).toBe(searchItem);
  });
  it('#filterItems should return true', () => {
    const searchTerm = 'u';
    const maxlength = 5;
    const response = ['Untitled Project'];
    component.filterItems(searchTerm, component.items, maxlength);
    expect(component.items).toEqual(response);
  });
});
