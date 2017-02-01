import { Component, OnInit } from '@angular/core';
import { GameService } from 'app/services/game.service';

@Component({
  selector: 'ttt-score',
  template: `
    <p>X: {{game.score.X}}</p>
    <p>O: {{game.score.O}}</p>
  `,
  styles: []
})
export class ScoreComponent implements OnInit {

  constructor(private game:GameService) { }

  ngOnInit() {
  }

}
