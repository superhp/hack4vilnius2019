import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.less']
})
export class InstructionsComponent implements OnInit {

  selectedGameId: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedGameId = params['gameId'];

      const gameType = params['gameType'];
      console.log('gameType = ' + gameType);
    })
  }

  navigateToMap() {
    this.router.navigate(['/map'], { queryParams: {
      gameId: this.selectedGameId
    }});
  }

}
