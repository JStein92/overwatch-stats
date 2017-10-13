import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
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
  selector: 'app-stat-header',
  templateUrl: './stat-header.component.html',
  styleUrls: ['./stat-header.component.css'],
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
    ]),
      trigger('flyInFromTop', [
        state('in', style({transform: 'translateY(0)'})),
        transition('void => *', [
          animate(".9s ease", keyframes([
            style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateY(5px)',  offset: 0.99}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
          ]))
        ]),
      ]),
      trigger('flyInFromSide', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          animate("0s 0s", keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          ])),
          animate(".7s 1s ease", keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(5px)',  offset: 0.99}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ]),
      ]),
      trigger('fadeInCharacterPicture', [
        state('in', style({opacity: '100'})),
        transition('void =>*', [
          style({opacity: '0'}),
          animate(".5s 0ms ease", style({opacity: '100'}))
        ])
      ]),
      trigger('flyInCharacterContainer', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          animate("0s 0s", keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          ])),
          animate(".7s 1800ms ease", keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(5px)',  offset: 0.99}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ]),
      ]),
      trigger('flyInCharacterStats', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          animate("0s 0s", keyframes([
            style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          ])),
          animate(".7s 1800ms ease", keyframes([
            style({opacity: 0, transform: 'translateX(100%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(5px)',  offset: 0.99}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
          ]))
        ]),
      ])
    ]
})

export class StatHeaderComponent implements OnInit {

  constructor(private formService : FormService) { }
  playerStats;
  level;
  compRank;
  avatar;
  tier;
  userName;
  initialLoad = true;
  showAllBool = false;
  totalPlaytime = 0;
  heroList = [];
  heroStats = [];
  generalStats = [];
  playtimeList = [];
  playtimeListConcat = [];
  heroSelected = null;
  showBtnText = "Show All";
  ngOnInit() {
  this.playerStats = this.formService.getPlayerStats();
  this.setStats();

  }

  setBarColor(heroOrder){
    if (heroOrder == 0)
    {
      return "progress-bar time-played-bar-fill bg-success";
    }else if (heroOrder == 1)
    {
      return "progress-bar time-played-bar-fill bg-info";
    }else if (heroOrder == 2)
    {
      return "progress-bar time-played-bar-fill bg-warning";
    }else
    {
      return "progress-bar time-played-bar-fill bg-danger";
    }
  }

  showAll(){
    this.initialLoad = false;
    if (this.showAllBool){
            this.showBtnText = "Show All"
      this.playtimeListConcat=[];
      for (let i = 0; i < 4; i++) {
          this.playtimeListConcat.push(this.playtimeList[i]);
      };
      this.showAllBool=false;
    } else{
      this.showBtnText = "Show Less"
      this.playtimeListConcat = this.playtimeList;
      this.showAllBool=true;
    }
  }

  setHeroStats(){
    let heroStatObj = this.heroSelected.details.hero_stats;
    this.heroStats=Object.keys(heroStatObj).map(function(key){
      let keyNoUnderscores = key.replace(/_/g," ");
      let newStat = {name:keyNoUnderscores, details:heroStatObj[key]};
      //console.log(newStat);
      return newStat;
    });

    let generalStatObj = this.heroSelected.details.general_stats;
    this.generalStats=Object.keys(generalStatObj).map(function(key){
      let keyNoUnderscores = key.replace(/_/g," ");
      let newStat = {name:keyNoUnderscores, details:generalStatObj[key]};
      //console.log(newStat);
      return newStat;
    });
  }

  setStats() {

    let playtimeObj = this.playerStats.us.heroes.playtime.competitive;
    this.playtimeList = Object.keys(playtimeObj).map(function(key) {
      let heroPlaytime = {name:key, playtime:playtimeObj[key]};
      return heroPlaytime;
    });


    this.playtimeList.sort(function(a,b){
      return b.playtime - a.playtime;
    })

   this.playtimeList = this.playtimeList.filter(function(hero){
     return (hero.playtime > 0)
   })

    let that = this;
    this.playtimeList.forEach(function(hero){
      that.totalPlaytime += hero.playtime;
    });

    for (let i = 0; i < 4; i++) {
        that.playtimeListConcat.push(that.playtimeList[i]);
    };


    this.level = this.playerStats.us.stats.competitive.overall_stats.level;
    this.compRank = this.playerStats.us.stats.competitive.overall_stats.comprank;
    this.avatar = this.playerStats.us.stats.competitive.overall_stats.avatar;
    this.tier = this.playerStats.us.stats.competitive.overall_stats.tier;
    this.userName = this.formService.getUserName();

    let obj = this.playerStats.us.heroes.stats.competitive;
    this.heroList = Object.keys(obj).map(function(key) {
      let newHero = {name:key, details:obj[key]};
      return newHero;
    });

  this.heroSelected=this.heroList[0];

  this.setHeroStats();

  }

  onCharSelect(hero){ //select a new character
    for (let i = 0; i < this.heroList.length; i++) {
        if (hero === this.heroList[i].name){
          this.heroSelected = this.heroList[i];
        }
    }
    this.setHeroStats();
  }

}
