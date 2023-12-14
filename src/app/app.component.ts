import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import {first, firstValueFrom, skip} from 'rxjs';
import {TileContainerDirective} from './directive/tile-container.directive';
import {TileDirective} from './directive/tile.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drag-drop';

  contentsMatrix: string[][] = [['aThing', 'First Item', 'Second Item'], ['Third Item', 'Fourth Item'], ['Fifth Item']];

  removeRow(index: number): void {
    this.contentsMatrix.splice(index, 1);
  }


  addRow(): void {
    this.contentsMatrix.push([]);
  }

  removeItem(target?: string[], item?: string): void {
    if (item) {
      const index = target?.indexOf(item) ?? -1;
      target?.splice(index, 1);
    }
  }

  makeLarger(items: string[], cell: string, tile: TileDirective): void {
    if (tile.width) {
      tile.width = Math.min(tile.width + 1, 12);
    } else {
      const baseDimension = Math.ceil(12 / Math.max(items.length, 0));
      const updatedDimension = Math.min(baseDimension + 1, 12);
      tile.width = updatedDimension;
    }
  }

  makeSmaller(items: string[], cell: string, tile: TileDirective): void {
    if (tile.width) {
      tile.width = Math.max(tile.width - 1, 1);
    } else {
      const baseDimension = Math.ceil(12 / Math.max(items.length, 0));
      const updatedDimension = Math.max(baseDimension - 1, 1);
      tile.width = updatedDimension;
    }
  }

  addItem(target?: string[]): void {
    const contents = prompt('Item Contents?');
    if (contents) {
      target?.push(contents);
    }
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
