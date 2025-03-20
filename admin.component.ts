import { Component } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Match } from '../models/match.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  newMatch: Partial<Match> = {};

  constructor(private matchService: MatchService) {}

  addMatch() {
    if (this.newMatch.teamA && this.newMatch.teamB && this.newMatch.time && this.newMatch.oddsA && this.newMatch.oddsB) {
      const match: Match = {
        teamA: this.newMatch.teamA,
        teamB: this.newMatch.teamB,
        time: this.newMatch.time,
        oddsA: this.newMatch.oddsA,
        oddsB: this.newMatch.oddsB,
        bets: []
      };
      this.matchService.addMatch(match);
      this.newMatch = {};
    }
  }
}