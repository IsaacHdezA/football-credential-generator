import { PlayerCardComponent } from '@/components/player-card/player-card';
import { FootballPlayer } from '@/models/player.model';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardDatePickerComponent } from '@/shared/components/date-picker';
import { ZardInputDirective } from '@/shared/components/input';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateTime } from 'luxon';

@Component({
  selector: 'generator',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    ZardInputDirective,
    ZardDatePickerComponent,
    ZardButtonComponent,

    PlayerCardComponent
  ],
  templateUrl: './generator.html',
  styleUrl: './generator.css',
})
export class GeneratorComponent {
  showDeletConfirmationDialog: boolean = true;
  today: DateTime = DateTime.now();

  get minAge(): Date { return DateTime.fromObject({ day: 1, month: 1, year: this.today.year - 70 }).toJSDate(); }
  get maxAge(): Date { return DateTime.fromObject({ day: 1, month: 1, year: this.today.year - 40 }).toJSDate(); }

  formBuilder: FormBuilder = inject(FormBuilder);

  teamForm = this.formBuilder.group({
    team: ["", [Validators.required]],
    season: ["", [Validators.required]],
    generationDate: [new Date(), [Validators.required]],
  });

  playerForm = this.formBuilder.group({
    // photo: ["holap", [Validators.required]],
    player: ["", [Validators.required]],
    birthdate: [this.minAge, [Validators.required]],
  });

  players: FootballPlayer[] = [];

  constructor() {
  }

  addPlayer() {
    const player = this.playerForm.value;
    const teamData = this.teamForm.value;
    const newPlayer = new FootballPlayer({
      team: teamData.team as string,
      season: teamData.season as string,

      // photo: player.photo,
      fullName: player.player as string,
      birthDate: player.birthdate ? DateTime.fromJSDate(player.birthdate as Date) : DateTime.now(),
    });

    this.players.push(newPlayer);

    this.playerForm.reset();
  }

  editPlayer(index: number) {
    const player = this.players.at(index);

    if (!player) throw new Error("This shouldn't be happening");
    this.playerForm.patchValue({
      player: player.fullName,
      birthdate: player.birthDate.toJSDate(),
    });

    this.teamForm.patchValue({
      team: player.team,
      season: player.season,
      generationDate: new Date(),
    });

    this.players.splice(index, 1);
  }
}
