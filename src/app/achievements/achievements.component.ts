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
  statToExclude;
  highlightsReady = false;
  constructor() { }

  ngOnInit() {
    this.statToExclude = this.findBadData();
    console.log("EXCLUDE: " + this.statToExclude);
    this.generateHighlights()
  }

  findBadData(){
    for (let i = 0; i < this.compStats.length; i++) {
        if (this.compStats[i].name.includes("overwatch"))
        {
          return i;
        }
    }
    return -1;
  }

  randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
  }


  generateHighlights(){
    let max = this.compStats.length;
    let excluded = this.statToExclude;

    let randNum1 = this.randomExcluded(0,max,excluded);
    let randNum2 = this.randomExcluded(0,max,excluded);
    let randNum3 = this.randomExcluded(0,max,excluded);

    if(this.compStats[randNum1] && this.compStats[randNum1].name)
    {
      //console.log(this.compStats[randNum1].name + " num:" + randNum1);
      this.highlightOne = this.compStats[randNum1];
    }
    if(this.compStats[randNum2] && this.compStats[randNum2].name)
    {
      //console.log(this.compStats[randNum2].name+ " num:" + randNum2);
      this.highlightTwo = this.compStats[randNum2];
    }
    if(this.compStats[randNum3] && this.compStats[randNum3].name)
    {
    //  console.log( this.compStats[randNum3].name+ " num:" + randNum3);
      this.highlightThree = this.compStats[randNum3];
    }

    this.highlightsReady = true;

  }

}
