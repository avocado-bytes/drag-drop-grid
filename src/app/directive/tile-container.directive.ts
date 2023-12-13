import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, ContentChildren, Directive, ElementRef, HostBinding, OnDestroy, QueryList, ViewContainerRef } from '@angular/core';
import { firstValueFrom, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { TileDirective } from './tile.directive';

@Directive({
  selector: '[appTileContainer]',
  exportAs: 'appTileContainer',
})
export class TileContainerDirective implements AfterViewInit, OnDestroy {
  @HostBinding('class.row')
  isRow = true;

  @HostBinding('class.mw-100')
  maxWidth = true;

  @ContentChildren(TileDirective)
  childTiles!: QueryList<TileDirective>

  nodes: TileDirective[] = [];

  private _ends = new Subject<void>();

  constructor(public elementRef: ElementRef, public viewContainerRef: ViewContainerRef) {
  }

  async dropped(event: CdkDragDrop<TileDirective>): Promise<void> {
    const draggingElement: HTMLElement = event.item.element.nativeElement;
    const droppedOnElement: HTMLElement = (<HTMLElement> this.nodes.at(event.currentIndex)!.elementRef.nativeElement);
    if (event.previousIndex > event.currentIndex) {
      this.elementRef.nativeElement.insertBefore(draggingElement, droppedOnElement);
      moveItemInArray(this.nodes, event.previousIndex, event.currentIndex);
    } else if (event.previousIndex < event.currentIndex) {
      const nextIndex = event.currentIndex + 1;
      const higherElement: HTMLElement | undefined = (<HTMLElement> this.nodes.at(nextIndex)?.elementRef.nativeElement);
      if (higherElement) {
        this.elementRef.nativeElement.insertBefore(draggingElement, higherElement);
        moveItemInArray(this.nodes, event.previousIndex, event.currentIndex);
      } else {
        this.nodes[this.nodes.length - 1].elementRef.nativeElement.after(draggingElement);
        moveItemInArray(this.nodes, event.previousIndex, event.currentIndex);
      }
    }
  }

  ngAfterViewInit(): void {
    this.childTiles.changes.pipe(startWith(this.childTiles), takeUntil(this._ends)).subscribe(it => {
      this.nodes = it.toArray();
    });
  }

  ngOnDestroy(): void {
    this._ends.next();
    this._ends.complete();
  }
}
