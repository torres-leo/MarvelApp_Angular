import { Component, OnDestroy, OnInit } from '@angular/core';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { Character } from '../../interfaces/characters.interface';
import { CharactersService } from '../../service/characters.service';

@Component({
  selector: 'app-characters-list',
  // hostDirectives: [InfiniteScrollDirective],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit, OnDestroy {
  constructor(private cs: CharactersService) {}
  characters: Character[] = [];
  pages = 0;
  offset = 20;

  ngOnInit(): void {
    this.cs.getCharacters(this.offset, this.pages).subscribe((req) => {
      this.characters = req.data.results;
    });
  }

  onScroll() {
    this.incrementPage();
    this.cs.getCharacters(this.offset, this.pages).subscribe((req) => {
      const getMoreCharacters = req.data.results;
      if (this.characters.length >= req.data.total) return;
      this.characters = [...this.characters, ...getMoreCharacters];
    });
  }

  incrementPage(): number {
    return (this.pages += 1);
  }

  ngOnDestroy(): void {
    this.pages = 0;
  }
}
