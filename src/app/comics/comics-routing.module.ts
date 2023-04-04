import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './pages/comic/comic.component';
import { ComicsListComponent } from './pages/comics-list/comics-list.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: ComicsListComponent },
      { path: ':id', component: ComicComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
