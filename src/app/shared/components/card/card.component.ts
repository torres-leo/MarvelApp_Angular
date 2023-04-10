import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/main/characters/interfaces/characters.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() character?: Character;

  constructor() {}

  ngOnInit(): void {}

  renderImage(): string {
    if (!this.character) return '';

    const {
      thumbnail: { path, extension },
    } = this.character;

    return `${path}.${extension}`;
  }
}
