import { DateTime } from 'luxon';

export interface FootballPlayerData {
  photo?: string | null;
  team: string;
  fullName: string;
  birthDate: DateTime;
  season: string;
};

export class FootballPlayer {
  photo?: string | null;
  team: string;
  fullName: string;
  birthDate: DateTime;
  season: string;

  constructor(data?: FootballPlayerData) {
    if (!data) {
      this.photo = "";
      this.team = "";
      this.fullName = "";
      this.birthDate = DateTime.now();
      this.season = "";

      return;
    }

    this.photo = data.photo;
    this.team = data.team;
    this.fullName = data.fullName;
    this.birthDate = data?.birthDate;
    this.season = data.season;
  }

  get stringDate(): string {
    return this.birthDate.toLocaleString(DateTime.DATE_MED);
  }
}
