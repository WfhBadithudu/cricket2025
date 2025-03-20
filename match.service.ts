import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, arrayUnion } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Match } from '../models/match.model';

@Injectable({ providedIn: 'root' })
export class MatchService {
  constructor(private firestore: Firestore) {}

  addMatch(match: Match) {
    const matchRef = collection(this.firestore, 'matches');
    return addDoc(matchRef, match);
  }

  getMatches(): Observable<Match[]> {
    const matchRef = collection(this.firestore, 'matches');
    return collectionData(matchRef, { idField: 'id' }) as Observable<Match[]>;
  }

  placeBet(matchId: string, user: string, team: string, amount: number) {
    const matchDoc = doc(this.firestore, `matches/${matchId}`);
    return updateDoc(matchDoc, {
      bets: arrayUnion({ user, team, amount })
    });
  }
}