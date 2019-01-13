import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../service/game.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  template: `
    <div class="container">
        <h2>Game Info:</h2>
        <h3>SCORE <span class="badge badge-{{badgeColor}}" role="alert">{{service.game.score}}</span></h3>
        <h3>SIZE <span class="badge badge-secondary">{{service.board.cells.length}} X {{service.board.cells.length}}</span></h3>
        <h3>LEVEL <span class="badge badge-secondary">{{service.level}}</span></h3>
    </div>
  `,
  styles: [`
  h2{
      font-family: 'Gloria Hallelujah', cursive;
  }
  h3{
      font-family: 'Source Code Pro', monospace;
  }`]
})
export class HeaderComponent implements OnInit {
  game: any;

  constructor(private service: GameService) {
      this.game = this.service;
      console.log(this.game)
  }

  get badgeColor(){
    let score = this.service.game.score;
    if(score == 0) return 'secondary';
    if(score > 0 && score <=100) return 'primary';
    if(score > 100 && score <=200) return 'success';
    if(score > 200 && score <=200) return 'warning';
    return 'danger';
  }
  ngOnInit() {}

}
