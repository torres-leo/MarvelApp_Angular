import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoriesListComponent } from './pages/stories-list/stories-list.component';
import { StoryComponent } from './pages/story/story.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: StoriesListComponent },
      { path: ':id', component: StoryComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoriesRoutingModule {}
