import { PlayerCardComponent } from '@/components/player-card/player-card';
import { FootballPlayer } from '@/models/player.model';
import { ZardButtonComponent } from '@/shared/components/button';
import { ZardDatePickerComponent } from '@/shared/components/date-picker';
import { ZardInputDirective } from '@/shared/components/input';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  players: FootballPlayer[] = [
    new FootballPlayer({
      fullName: "Juan Roberto Morales",
      team: "Magisterio",
      birthDate: DateTime.fromISO("1958-05-12"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=1"
    }),
    new FootballPlayer({
      fullName: "Ricardo Zúñiga Valdez",
      team: "Magisterio",
      birthDate: DateTime.fromISO("1960-11-20"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=2"
    }),
    new FootballPlayer({
      fullName: "Francisco Javier Solís",
      team: "Magisterio",
      birthDate: DateTime.fromISO("1956-02-28"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=3"
    }),
    new FootballPlayer({
      fullName: "Héctor Manuel Ortega",
      team: "Magisterio",
      birthDate: DateTime.fromISO("1962-08-15"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=4"
    }),
    new FootballPlayer({
      fullName: "Alberto García Luna",
      team: "Deportivo Irapuato",
      birthDate: DateTime.fromISO("1959-03-10"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=5"
    }),
    new FootballPlayer({
      fullName: "Tomás Rangel Herrera",
      team: "Deportivo Irapuato",
      birthDate: DateTime.fromISO("1961-12-01"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=6"
    }),
    new FootballPlayer({
      fullName: "Gerardo Martínez Ríos",
      team: "Deportivo Irapuato",
      birthDate: DateTime.fromISO("1963-07-22"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=7"
    }),
    new FootballPlayer({
      fullName: "Luis Felipe Calderón",
      team: "Ferrocarrileros",
      birthDate: DateTime.fromISO("1957-09-30"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=8"
    }),
    new FootballPlayer({
      fullName: "Arturo Méndez Trejo",
      team: "Ferrocarrileros",
      birthDate: DateTime.fromISO("1964-01-14"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=9"
    }),
    new FootballPlayer({
      fullName: "José Luis Esquivel",
      team: "Ferrocarrileros",
      birthDate: DateTime.fromISO("1960-04-05"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=10"
    }),
    new FootballPlayer({
      fullName: "Ignacio Pérez Rocha",
      team: "Magisterio",
      birthDate: DateTime.fromISO("1958-10-25"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=11"
    }),
    new FootballPlayer({
      fullName: "Eduardo Castillo G.",
      team: "San José",
      birthDate: DateTime.fromISO("1965-06-18"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=12"
    }),
    new FootballPlayer({
      fullName: "Rubén Aguirre Blanco",
      team: "San José",
      birthDate: DateTime.fromISO("1956-11-30"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=13"
    }),
    new FootballPlayer({
      fullName: "César Augusto Ramos",
      team: "San José",
      birthDate: DateTime.fromISO("1961-05-09"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=14"
    }),
    new FootballPlayer({
      fullName: "Miguel Ángel Osorio",
      team: "Unión Veteranos",
      birthDate: DateTime.fromISO("1959-02-12"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=15"
    }),
    new FootballPlayer({
      fullName: "Fernando Islas Ruiz",
      team: "Unión Veteranos",
      birthDate: DateTime.fromISO("1962-12-25"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=16"
    }),
    new FootballPlayer({
      fullName: "Rafael Domínguez L.",
      team: "Unión Veteranos",
      birthDate: DateTime.fromISO("1960-09-08"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=17"
    }),
    new FootballPlayer({
      fullName: "Salvador Núñez García",
      team: "Real Irapuato",
      birthDate: DateTime.fromISO("1957-01-20"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=18"
    }),
    new FootballPlayer({
      fullName: "Octavio Lozano Silva",
      team: "Real Irapuato",
      birthDate: DateTime.fromISO("1963-03-15"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=19"
    }),
    new FootballPlayer({
      fullName: "Víctor Hugo Mares",
      team: "Real Irapuato",
      birthDate: DateTime.fromISO("1965-08-30"),
      season: "2024-2025",
      photo: "https://i.pravatar.cc/150?u=20"
    })
  ];

  constructor(
    private router: Router
  ) {
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

  printCredentials() {
    setTimeout(() => {
      window.print();
    }, 100);
  }
}
