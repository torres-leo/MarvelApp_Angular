import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicComponent } from './pages/comic/comic.component';
import { ComicsListComponent } from './pages/comics-list/comics-list.component';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from '../shared/shared.module';
import { ComicsRoutingModule } from './comics-routing.module';

@NgModule({
  declarations: [ComicComponent, ComicsListComponent, IndexComponent],
  imports: [CommonModule, ComicsRoutingModule, SharedModule],
})
export class ComicsModule {}
