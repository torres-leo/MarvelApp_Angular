import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [CharacterComponent, CharactersListComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    InfiniteScrollModule,
  ],
})
export class CharactersModule {}
