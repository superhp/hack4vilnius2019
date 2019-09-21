import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../services/results.service';
import { LeaderboardItem } from './leaderboardItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.less']
})
export class LeaderboardComponent implements OnInit {

  constructor(public resultsSerivce: ResultsService,
    private activatedRoute: ActivatedRoute) { }

  displayedColumns: string[] = ['position', 'name', 'duration'];
  leaderboard: LeaderboardItem[];
  currentId: string;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentId = params['resultId'];
      const gameId = params['gameId'];

      this.resultsSerivce.getResults(gameId).subscribe(results => {
        console.log("Results");
        console.log(results);
        this.leaderboard = results.map(r => ({ id: r.payload.doc.id, name: r.payload.doc.data().username, duration: this.resultsSerivce.calculateDurationInMinutes(r.payload.doc.data().start, r.payload.doc.data().end) }));
        this.leaderboard = this.leaderboard.filter(l => l.duration >= 0).sort((l1, l2) => l1.duration - l2.duration);
        console.log(this.leaderboard);
      });
    });
  }

}
