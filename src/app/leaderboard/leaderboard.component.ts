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

  constructor(public resultsService: ResultsService,
    private activatedRoute: ActivatedRoute) { }

  displayedColumns: string[] = ['position', 'name', 'duration'];
  leaderboard: LeaderboardItem[];
  currentId: string;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentId = params['resultId'];
      const gameId = params['gameId'];

      this.resultsService.getResults(gameId).subscribe(results => {
        console.log("Results");
        console.log(results);
        
        this.leaderboard = this.resultsService.transformResults(results);

        console.log(this.leaderboard);
      });
    });
  }

}
