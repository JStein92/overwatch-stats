import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  AnimationEvent
} from '@angular/animations';
@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
  animations: [
    trigger('fadeIn1', [
      state('in', style({opacity: '100'})),
      transition('void =>*', [
        style({opacity: '0'}),
        animate(".5s 3s ease", style({opacity: '100'}))
        ])
      ]),
    trigger('fadeIn2', [
      state('in', style({opacity: '100'})),
      transition('void =>*', [
        style({opacity: '0'}),
        animate(".5s 3300ms ease", style({opacity: '100'}))
        ])
      ]),
    trigger('fadeIn3', [
      state('in', style({opacity: '100'})),
      transition('void =>*', [
        style({opacity: '0'}),
        animate(".5s 3600ms ease", style({opacity: '100'}))
        ])
      ])
    ]
  })
export class AchievementsComponent implements OnInit {
  @Input() compStats;
  @Input() quickplayStats;

  highlightOne;
  highlightTwo;
  highlightThree;

  constructor() { }

  ngOnInit() {
    this.generateHighlights()

  }

  generateHighlights(){
    let randNum1 = Math.floor(Math.random() * this.compStats.length);
    while(randNum1 == 7){
      Math.floor(Math.random() * this.compStats.length)
    }
    let randNum2= Math.floor(Math.random() * this.compStats.length);
    while(randNum2==randNum1 || randNum2 == 7){
       randNum2 =  Math.floor(Math.random() * this.compStats.length)
    }

    let randNum3= Math.floor(Math.random() * this.compStats.length);
    while(randNum3==randNum2 || randNum3==randNum1 || randNum3 == 7){
       randNum3 =  Math.floor(Math.random() * this.compStats.length)
    }

    console.log(this.compStats[randNum1].name + " num:" + randNum1);
    console.log(this.compStats[randNum2].name+ " num:" + randNum2);
    console.log( this.compStats[randNum3].name+ " num:" + randNum3);

    this.highlightOne = this.compStats[randNum1];
    this.highlightTwo = this.compStats[randNum2];
    this.highlightThree = this.compStats[randNum3];
  }

}
