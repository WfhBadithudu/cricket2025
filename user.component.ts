import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Match } from '../models/match.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  matches: Match[] = [];
  selectedBets: { [matchId: string]: { team: string; amount: number } } = {};

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.matchService.getMatches().subscribe(data => this.matches = data);
  }

  placeBet(match: Match) {
    const bet = this.selectedBets[match.id!];
    if (bet?.team && bet.amount) {
      this.matchService.placeBet(match.id!, 'user123', bet.team, bet.amount);
    }
  }
}