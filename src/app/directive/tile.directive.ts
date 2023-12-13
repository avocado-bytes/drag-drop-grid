import { Directive, ElementRef, HostBinding, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTile]',
  exportAs: 'appTile',
})
export class TileDirective {
  @HostBinding('class')
  get columnClass(): string {
    return this.width !== undefined ? `col-${this.width}` : 'col';
  }

  @HostBinding('class.card')
  card = true;

  @Input()
  width?: number;

  constructor(public elementRef: ElementRef, public viewContainerRef: ViewContainerRef) {
  }
}
