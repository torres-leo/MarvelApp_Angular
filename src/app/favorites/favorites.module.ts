import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesListComponent } from './pages/favorites-list/favorites-list.component';
import { SharedModule } from '../shared/shared.module';
import { FavoriteListRoutingModule } from './favorites-routing.module';

@NgModule({
  declarations: [FavoritesListComponent],
  imports: [CommonModule, FavoriteListRoutingModule, SharedModule],
})
export class FavoritesModule {}
