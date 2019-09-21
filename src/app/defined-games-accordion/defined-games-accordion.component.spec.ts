import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinedGamesAccordionComponent } from './defined-games-accordion.component';

describe('DefinedGamesAccordionComponent', () => {
  let component: DefinedGamesAccordionComponent;
  let fixture: ComponentFixture<DefinedGamesAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinedGamesAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinedGamesAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
