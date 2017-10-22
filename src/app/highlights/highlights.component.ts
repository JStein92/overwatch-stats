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
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css'],
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
export class HighlightsComponent implements OnInit {
  @Input() compStats;
  @Input() quickplayStats;
  @Input() statSetToShow;

  highlightOne;
  highlightTwo;
  highlightThree;
  statToExclude;
  max;
  currentStatSet;
  highlightsReady = false;
  constructor() { }

  ngOnInit() {
    this.statToExclude = this.findBadData();
    this.generateHighlights() // randomly get highlights to show
  }

  findBadData(){// find the useless stat in the api that contains "overwatch" and a bunch of random characters
    for (let i = 0; i < this.max; i++) {
        if (this.currentStatSet[i].name.includes("overwatch"))
        {
          return i;
        }
    }
    return -1;
  }

  randomExcluded(min, max, excluded) { //exclude the "bad data" stat from possible rand options
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
  }


  generateHighlights(){


    if (this.statSetToShow==="quickplay")
    {
      this.max = this.quickplayStats.length;
      this.currentStatSet = this.quickplayStats;
      let excluded = this.statToExclude;

      let randNum1 = this.randomExcluded(0,this.max,excluded);
      let randNum2 = this.randomExcluded(0,this.max,excluded);
      let randNum3 = this.randomExcluded(0,this.max,excluded);

      if(this.quickplayStats[randNum1] && this.quickplayStats[randNum1].name)
      {
        //console.log(this.quickplayStats[randNum1].name + " num:" + randNum1);
        this.highlightOne = this.quickplayStats[randNum1];
      }
      if(this.quickplayStats[randNum2] && this.quickplayStats[randNum2].name)
      {
        //console.log(this.quickplayStats[randNum2].name+ " num:" + randNum2);
        this.highlightTwo = this.quickplayStats[randNum2];
      }
      if(this.quickplayStats[randNum3] && this.quickplayStats[randNum3].name)
      {
      //  console.log( this.quickplayStats[randNum3].name+ " num:" + randNum3);
        this.highlightThree = this.quickplayStats[randNum3];
      }
    } else{

      this.max = this.compStats.length;
      let excluded = this.statToExclude;
      this.currentStatSet = this.compStats;
      let randNum1 = this.randomExcluded(0,this.max,excluded);
      let randNum2 = this.randomExcluded(0,this.max,excluded);
      let randNum3 = this.randomExcluded(0,this.max,excluded);

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
    }



    this.highlightsReady = true;

  }

}
