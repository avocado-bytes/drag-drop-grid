import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective {
  @Input()
  public appGridItem?: string;
  
  @Input('appGridItemLabel')
  public label?: string;

  constructor(public templateRef: TemplateRef<GridItemDirective>) {
  }
}
