import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesListComponent } from './pages/stories-list/stories-list.component';
import { StoryComponent } from './pages/story/story.component';
import { StoriesRoutingModule } from './stories-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StoriesListComponent, StoryComponent],
  imports: [CommonModule, StoriesRoutingModule, SharedModule],
})
export class StoriesModule {}
