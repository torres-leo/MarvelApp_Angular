import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'characters',
        loadChildren: () =>
          import('./characters/characters.module').then(
            (m) => m.CharactersModule
          ),
      },
      {
        path: 'comics',
        loadChildren: () =>
          import('./comics/comics.module').then((m) => m.ComicsModule),
      },
      {
        path: 'stories',
        loadChildren: () =>
          import('./stories/stories.module').then((m) => m.StoriesModule),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('./favorites/favorites.module').then((m) => m.FavoritesModule),
      },
      {
        path: '**',
        redirectTo: 'characters',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
