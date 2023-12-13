import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedTileComponent } from './red-tile.component';

describe('RedTileComponent', () => {
  let component: RedTileComponent;
  let fixture: ComponentFixture<RedTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedTileComponent]
    });
    fixture = TestBed.createComponent(RedTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
