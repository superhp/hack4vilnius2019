import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../services/results.service';
import { LeaderboardItem } from './leaderboardItem';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.less']
})
export class LeaderboardComponent implements OnInit {

  constructor(public resultsSerivce: ResultsService) { }

  displayedColumns: string[] = ['position', 'name', 'duration'];
  leaderboard: LeaderboardItem[];
  currentId: string = "7letN55c3FkRAbn95mnq";

  ngOnInit() {
    this.resultsSerivce.getResults("bridges").subscribe(results => {
      console.log(results);
      this.leaderboard = results.map(r => ({ id: r.payload.doc.id, name: r.payload.doc.data().username, duration: this.calculateDurationInMinutes(r.payload.doc.data().start, r.payload.doc.data().end) })); // minutes }));
      this.leaderboard = this.leaderboard.sort((l1, l2) => l1.duration - l2.duration);
      console.log(this.leaderboard);
    });
  }

  calculateDurationInMinutes(start, end) {
    var diffMs = (end.seconds - start.seconds);

    return Math.round(((diffMs % 86400000) % 3600000) / 60);
  }
}
