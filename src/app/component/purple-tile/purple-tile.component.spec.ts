import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleTileComponent } from './purple-tile.component';

describe('PurpleTileComponent', () => {
  let component: PurpleTileComponent;
  let fixture: ComponentFixture<PurpleTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurpleTileComponent]
    });
    fixture = TestBed.createComponent(PurpleTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
