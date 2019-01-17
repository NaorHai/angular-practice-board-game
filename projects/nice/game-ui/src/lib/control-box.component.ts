import { Component, OnInit } from '@angular/core';
import {GameService} from "@nice/game-service";

@Component({
  selector: 'app-control-box',
  template: `
      <div class="container">
          <div class="panel-ctrl"></div>
          <div class="button-ctrl" (click)="game.up()">
              <img src="https://img.icons8.com/dusk/64/000000/circled-chevron-up.png"><br/>
          </div>
          <div class="panel-ctrl"></div>
          <div class="clear"></div>
          <div class="button-ctrl" (click)="game.left()">
              <img src="https://img.icons8.com/dusk/64/000000/circled-chevron-left.png"><br/>
          </div>
          <div class="panel-ctrl"></div>
          <div class="button-ctrl" (click)="game.right()">
              <img src="https://img.icons8.com/dusk/64/000000/circled-chevron-right.png"><br/>
          </div>
          <div class="clear"></div>
          <div class="panel-ctrl"></div>
          <div class="button-ctrl" (click)="game.down()">
              <img src="https://img.icons8.com/dusk/64/000000/circled-chevron-down.png"><br/>
          </div>
          <div class="panel-ctrl"></div>
      </div>
  `,
  styles: [`
      
      .panel-ctrl{
          float: left;
          width: 65px;
          height: 65px;
      }
      .button-ctrl{
          float: left;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          transition: 0.5s;
      }

      .button-ctrl:hover{
          background:cadetblue;
      }
      
      .button-ctrl img{
          display: block;
          margin: auto;
          cursor: pointer;
      }
      
  `]
})
export class ControlBoxComponent implements OnInit {
  game: any;

  constructor(private gameService: GameService) {
    this.game = gameService.game;
  }

  ngOnInit() {
  }

}
