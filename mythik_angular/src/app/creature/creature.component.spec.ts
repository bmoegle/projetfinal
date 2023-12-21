import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureComponent } from './creature.component';

describe('CreatureComponent', () => {
  let component: CreatureComponent;
  let fixture: ComponentFixture<CreatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureComponent]
    });
    fixture = TestBed.createComponent(CreatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
