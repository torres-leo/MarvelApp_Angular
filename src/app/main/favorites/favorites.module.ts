import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesListComponent } from './pages/favorites-list/favorites-list.component';
import { FavoriteListRoutingModule } from './favorites-routing.module';

@NgModule({
  declarations: [FavoritesListComponent],
  imports: [CommonModule, FavoriteListRoutingModule],
})
export class FavoritesModule {}
