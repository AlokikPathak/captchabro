import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFieldPage } from './play-field.page';

describe('PlayFieldPage', () => {
  let component: PlayFieldPage;
  let fixture: ComponentFixture<PlayFieldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayFieldPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayFieldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
