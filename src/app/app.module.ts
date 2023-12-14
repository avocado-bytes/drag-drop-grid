import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TileContainerDirective } from './directive/tile-container.directive';
import { TileDirective } from './directive/tile.directive';
import { RedTileComponent } from './component/red-tile/red-tile.component';
import { BlueTileComponent } from './component/blue-tile/blue-tile.component';
import { PurpleTileComponent } from './component/purple-tile/purple-tile.component';
import { GridComponent } from './component/grid/grid.component';
import { GridItemDirective } from './directive/grid-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    TileContainerDirective,
    TileDirective,
    RedTileComponent,
    BlueTileComponent,
    PurpleTileComponent,
    GridComponent,
    GridItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
