import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { GridItemDirective } from 'src/app/directive/grid-item.directive';
import { TileDirective } from 'src/app/directive/tile.directive';

interface ContentsMatrixItem {
  id: string;
  label: string;
  view: TemplateRef<any>;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterViewInit {
  @ContentChildren(GridItemDirective, { read: GridItemDirective })
  items!: QueryList<GridItemDirective>;

  contentsMatrix: ContentsMatrixItem[][] = [];

  removeRow(index: number): void {
    this.contentsMatrix.splice(index, 1);
  }

  addRow(): void {
    this.contentsMatrix.push([]);
  }

  removeItem(target?: ContentsMatrixItem[], item?: string): void {
    const itemInstance = target?.find(it => it.id === item);
    if (itemInstance) {
      const index = target?.indexOf(itemInstance) ?? -1;
      target?.splice(index, 1);
    }
  }

  resetSize(tile: TileDirective): void {
    tile.width = undefined;
  }

  makeLarger(items: ContentsMatrixItem[], tile: TileDirective): void {
    if (tile.width) {
      tile.width = Math.min(tile.width + 1, 12);
    } else {
      const baseDimension = Math.ceil(12 / Math.max(items.length, 0));
      const updatedDimension = Math.min(baseDimension + 1, 12);
      tile.width = updatedDimension;
    }
  }

  makeSmaller(items: ContentsMatrixItem[], tile: TileDirective): void {
    if (tile.width) {
      tile.width = Math.max(tile.width - 1, 1);
    } else {
      const baseDimension = Math.ceil(12 / Math.max(items.length, 0));
      const updatedDimension = Math.max(baseDimension - 1, 1);
      tile.width = updatedDimension;
    }
  }

  addItem(target?: ContentsMatrixItem[]): void {
    const contents = prompt('Item Contents?');
    if (contents) {
      // target?.push(contents);
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

  ngAfterViewInit(): void {
    console.log('grid items', this.items);
    const items: ContentsMatrixItem[] = this.items.toArray().map(it => {
      return { id: it.appGridItem ?? '', label: it.label ?? '', view: it.templateRef };
    });

    this.contentsMatrix.push(items);
  }
}
