import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
