import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicComponent } from './pages/comic/comic.component';
import { ComicsListComponent } from './pages/comics-list/comics-list.component';
import { ComicsRoutingModule } from './comics-routing.module';

@NgModule({
  declarations: [ComicComponent, ComicsListComponent],
  imports: [CommonModule, ComicsRoutingModule],
})
export class ComicsModule {}
