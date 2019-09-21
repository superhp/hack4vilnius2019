import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../services/results.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.less']
})
export class FinishComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, 
    private resultsService: ResultsService) { }

    result: any;
    duration: number;

    position: number;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const resultId = params['resultId'];

      console.log(resultId);

      this.resultsService.getResult(resultId).subscribe(r => {
        this.result = { ...r.payload.data(), id: r.payload.id };
        // this.result.game = this.result.game.split("/")[1];
        console.log(this.result);
        this.duration = this.resultsService.calculateDurationInMinutes(this.result.start, this.result.end);

        this.resultsService.getResults(this.result.game.id).subscribe(results => {
          console.log("Results");
          console.log(results);
          
          let leaderboard = this.resultsService.transformResults(results);
  
          this.position = leaderboard.map(l => l.id).indexOf(resultId) + 1;
        });
      });

    });
  }

}
