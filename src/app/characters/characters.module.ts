import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './pages/character/character.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CharacterComponent, IndexComponent, CharactersListComponent],
  imports: [CommonModule, CharactersRoutingModule, SharedModule],
})
export class CharactersModule {}
