import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './pages/comic/comic.component';
import { ComicsListComponent } from './pages/comics-list/comics-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ComicsListComponent },
      { path: ':id', component: ComicComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
