import { FootballPlayer } from '@/models/player.model';
import { Component, Input } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
})
export class PlayerCardComponent {
  @Input() player!: FootballPlayer;

  generationDate: DateTime = DateTime.now().setLocale("mx");

  get generationDateString(): string {
    const { day, year } = this.generationDate;
    const month = this.generationDate.toFormat("LLLL");

    return `${day} de ${month} de ${year}`;
  }

  constructor() {
  }
}
