import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
  selector: 'app-win-rate',
  templateUrl: './win-rate.component.html',
  styleUrls: ['./win-rate.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({opacity: '100'})),
      transition('void =>*', [
        style({opacity: '0'}),
        animate(".5s 2300ms ease", style({opacity: '100'}))
      ])
    ]),
    trigger('fadeInFast', [
      state('in', style({opacity: '100'})),
      transition('void =>*', [
        style({opacity: '0'}),
        animate(".5s 0ms ease", style({opacity: '100'}))
      ])
    ]),
    trigger('shrinkOut1', [
      state('in', style({height: '30px'})),
      transition('void =>*', [
        style({height: '0px'}),
        animate(".5s 2300ms ease", style({height: '30px'}))
      ])
    ]),
    trigger('shrinkOut2', [
      state('in', style({height: '30px'})),
      transition('void =>*', [
        style({height: '0px'}),
        animate(".5s 0ms ease", style({height: '30px'}))
      ])
    ])
  ]
})
export class WinRateComponent implements OnInit {
@Input() winRateList;
@Input() showBtnText;
@Input() heroSelected;
@Output() showAllSender = new EventEmitter();
@Output() selectCharacterSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  onCharSelect(hero){
    this.selectCharacterSender.emit(hero);
  }

  setBarColor(heroOrder){

    let classString = "progress-bar time-played-bar-fill ";


    if (heroOrder == 0)
    {
      return classString += "bg-success";
    }else if (heroOrder == 1)
    {
    return classString += "bg-info";
    }else if (heroOrder == 2)
    {
    return classString += "bg-warning";
    }else
    {
      return classString += "bg-danger";
    }
  }

  setBarOutline(heroName) {
    let classString= "progress time-played-bar ";
    if (heroName == this.heroSelected.name)
    {
      return classString += "selected-hero";
    } else{
      return classString;
    }
  }

  showAll(){
    this.showAllSender.emit();
  }

}
