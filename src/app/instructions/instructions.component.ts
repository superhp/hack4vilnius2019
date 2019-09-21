import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.less']
})
export class InstructionsComponent implements OnInit {

  selectedGameId: string;
  pointsCount: number;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private gameService: GamesService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedGameId = params['gameId'];

      const gameType = params['gameType'];
      console.log('gameType = ' + gameType);
    });

    this.gameService.getGame(this.selectedGameId).subscribe(g => {
      this.pointsCount = g.points.length;
    });
  }

  navigateToMap() {
    this.router.navigate(['/map'], { queryParams: {
      gameId: this.selectedGameId
    }});
  }

}
