import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueTileComponent } from './blue-tile.component';

describe('BlueTileComponent', () => {
  let component: BlueTileComponent;
  let fixture: ComponentFixture<BlueTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueTileComponent]
    });
    fixture = TestBed.createComponent(BlueTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
