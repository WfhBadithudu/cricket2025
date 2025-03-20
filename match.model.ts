export interface Match {
  id?: string;
  teamA: string;
  teamB: string;
  time: string;
  oddsA: number;
  oddsB: number;
  bets?: {
    user: string;
    team: string;
    amount: number;
  }[];
}