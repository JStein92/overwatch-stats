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
  statSetToShow = "competitive";
  lastHeroSelected;
  initialLoad = true;
  showAllBool = false;
  totalPlaytime = 0;
  prestige;
  heroListCompetitive = [];
  heroListQuickplay = [];
  heroList = [];
  heroStats = [];
  generalStats = [];
  playtimeListCompetitive = [];
  playtimeListQuickplay = [];
  playtimeList = [];
  playtimeListConcat = [];
  heroSelected = null;
  showBtnText = "Show All";
  compStats = [];
  quickplayStats = [];
  ngOnInit() {
  this.playerStats = this.formService.getPlayerStats();
  this.level = this.playerStats.us.stats.competitive.overall_stats.level;
  this.compRank = this.playerStats.us.stats.competitive.overall_stats.comprank;
  this.avatar = this.playerStats.us.stats.competitive.overall_stats.avatar;
  this.tier = this.playerStats.us.stats.competitive.overall_stats.tier;
  this.userName = this.formService.getUserName();
  this.prestige = this.playerStats.us.stats.competitive.overall_stats.prestige;

  this.generateHeroLists();
  this.setStats();
  this.setHeroStats();
  }

  generateHeroLists(){
    let  obj = this.playerStats.us.heroes.stats.competitive;
    this.heroListCompetitive = Object.keys(obj).map(function(key) {
      let newHero = {name:key, details:obj[key]};
      return newHero;
    });

    let  objQp = this.playerStats.us.heroes.stats.quickplay;
    this.heroListQuickplay = Object.keys(objQp).map(function(key) {
      let newHero = {name:key, details:objQp[key]};
      return newHero;
    });

    let playtimeObj = this.playerStats.us.heroes.playtime.competitive;
    this.playtimeListCompetitive = Object.keys(playtimeObj).map(function(key) {
      let heroPlaytime = {name:key, playtime:playtimeObj[key]};
      return heroPlaytime;
    });

    let playtimeObjQp = this.playerStats.us.heroes.playtime.quickplay;
    this.playtimeListQuickplay = Object.keys(playtimeObjQp).map(function(key) {
      let heroPlaytime = {name:key, playtime:playtimeObjQp[key]};
      return heroPlaytime;
    });

    // for achievement cards
      let compStatsObj = this.playerStats.us.stats.competitive.game_stats;
      this.compStats = Object.keys(compStatsObj).map(function(key) {
        let keyNoUnderscores = key.replace(/_/g," ");
        let newStat = {name:keyNoUnderscores, details: compStatsObj[key]};
        if (newStat.details % 1 !=0 && !newStat.name.includes("kpd")){
              newStat.details = newStat.details.toFixed(2).toString() + " hours";
        }
            return newStat;
      });
    // for achievement cards
      let quckplayStatsObj = this.playerStats.us.stats.quickplay.game_stats;
      this.quickplayStats = Object.keys(quckplayStatsObj).map(function(key) {
        let keyNoUnderscores = key.replace(/_/g," ");
        let newStat = {name:keyNoUnderscores,  details: quckplayStatsObj[key]};
        if (newStat.details % 1 !=0 && !newStat.name.includes("kpd")){
              newStat.details = newStat.details.toFixed(2).toString() + " hours";
        }
        return newStat;
      });
  }

  showQuickplayStats(hero){
    if (this.isQuickplay(hero)){
      this.statSetToShow="quickplay";
      this.onCharSelect(hero);
    }
  }

  showCompetitiveStats(hero){
    if (this.isCompetitive(hero)){
      this.statSetToShow="competitive";
      this.onCharSelect(hero);
    }
  }

  isCompetitive(heroSelected){
    let listContainsHero = false;
    this.heroListCompetitive.forEach(function(hero){
      if(hero.name === heroSelected.name){
        listContainsHero = true;
      }
    });
    return listContainsHero;
  }
  isQuickplay(heroSelected){
    let listContainsHero = false;
    this.heroListQuickplay.forEach(function(hero){
      if(hero.name === heroSelected.name){
        listContainsHero = true;
      }
    });
    return listContainsHero;
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

  setStats() {
    let playtimeObj;
    if (this.statSetToShow === "competitive"){
      this.heroList = this.heroListCompetitive;
      this.playtimeList = this.playtimeListCompetitive;
    } else {
       this.heroList = this.heroListQuickplay;
       this.playtimeList = this.playtimeListQuickplay;
    }

    let that = this;
    if (this.heroSelected===null){
      this.heroSelected=this.heroList[0];
      this.playtimeList.forEach(function(hero){
        that.totalPlaytime += hero.playtime;
      });
    }

    this.sortList();
  }

  sortList(){
    this.playtimeList.sort(function(a,b){
      return b.playtime - a.playtime;
    });

    var first = this.heroSelected.name;
    this.playtimeList.sort(function(a,b){
      return a.name == first ? -1 : b.name === first? 1:0;
    });

    this.playtimeList = this.playtimeList.filter(function(hero){
      return (hero.playtime > 0)
    })

    for (let i = 0; i < 4; i++) {
        this.playtimeListConcat.push(this.playtimeList[i]);
    };
  }

  setHeroStats(){
    this.heroStats = null;
    this.generalStats = null;

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

  onCharSelect(hero){ //select a new character
    this.heroSelected=null;

    if (this.statSetToShow === "competitive"){
      this.heroList = this.heroListCompetitive;
      this.playtimeList = this.playtimeListCompetitive;
    } else {
       this.heroList = this.heroListQuickplay;
       this.playtimeList = this.playtimeListQuickplay;
    }

    for (let i = 0; i < this.heroList.length; i++) {
        if (hero.name === this.heroList[i].name || hero ===this.heroList[i].name){
          this.heroSelected = this.heroList[i];
          this.sortList();
          break;
        }
    }

    this.playtimeListConcat=[];
    for (let i = 0; i < 4; i++) {
        this.playtimeListConcat.push(this.playtimeList[i]);
    };

    this.setHeroStats();

  }

  competitiveBtn(heroSelected){
    if(this.isCompetitive(heroSelected)){
        if (this.statSetToShow === "quickplay"){
          return "btn btn-info btn-on"
        } else {
            return "btn btn-info btn-off"
        }
      } else{

        return "btn btn-info btn-disabled"
      }
  }

  quickplayBtn(heroSelected){
    if(this.isQuickplay(heroSelected)){
        if (this.statSetToShow === "competitive"){
          return "btn btn-info btn-on"
        } else {
            return "btn btn-info btn-off"
        }
      } else{
        return "btn btn-info btn-disabled"
      }
    }


}
