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
  prestige;

  statSetToShow = "competitive"; // show competitive or quickplay?
  showAllBool = false; //used to toggle the "show all/show less" btn for the My Heroes sections
  totalPlaytime = 0; //used to generate bar % for playtime

  heroListCompetitive = []; // all heroes the user has played in competitive
  heroListQuickplay = [];// all heroes the user has played in QP
  heroList = []; // the list to show, changes on whether user selects "quickplay" or "competitive"

  heroStats = []; //special stats box
  generalStats = []; // general stats box

  playtimeListCompetitive = []; //list of playtimes in comp
  playtimeListQuickplay = []; //list of playtimes in QP
  playtimeList = []; //the list to use, changes on whether "quckplay" or "competitive" is selected
  playtimeListCompetitiveConcat = []; //shortened list of playtimeListCompetitive
  playtimeListQuickplayConcat = [];
  playtimeListToShow= [];

  heroSelected = null; //current hero selected

  showBtnText = "Show All"; //btn text that toggles for "my heroes" lists

  compStats = []; // for highlights
  quickplayStats = []; //for highlight cards

  winRateList = []; //win rate list for competitive only
  winRateListConcat = []; //short version of win rate list
  winRateListToShow = [];

  //which filter to use?
  displayWinRate = true;
  displayTimePlayed = false;

  ngOnInit() { //set persistent stats and generate data needed for initial load
  this.playerStats = this.formService.getPlayerStats();
  this.level = this.playerStats.us.stats.competitive.overall_stats.level;
  this.compRank = this.playerStats.us.stats.competitive.overall_stats.comprank;
  this.avatar = this.playerStats.us.stats.competitive.overall_stats.avatar;
  this.tier = this.playerStats.us.stats.competitive.overall_stats.tier;
  this.userName = this.formService.getUserName();
  this.prestige = this.playerStats.us.stats.competitive.overall_stats.prestige;

  this.generateHeroLists(); //first create all the arrays needed
  this.setStats();
  this.sortLists(); //arrange playtime and winrate lists

  let that = this;
  if (this.heroSelected===null){ // for initial load, get total playtime and assign hero selected
    this.heroSelected=this.heroList[0];
    this.playtimeList.forEach(function(hero){
      that.totalPlaytime += hero.playtime;
    });
  }

  this.onCharSelect(this.heroSelected);

  this.setHeroStats();
  }

  generateHeroLists(){ //loop through varios JSON objs and make arrays to use later
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

      this.winRateList = [];
      for (let i = 0; i < this.heroListCompetitive.length; i++) {
          this.winRateList.push({name: this.heroListCompetitive[i].name, details: (this.heroListCompetitive[i].details.general_stats.win_percentage*100).toFixed(0)})
      }
  }

  displayWinRateClick(hero){ //user selects Win Rate as the list they want to see.
    if (!this.displayWinRate){
      if (this.isCompetitive(hero)) // if the current hero selected is viable for competitive...
      {
        console.log(hero);
        this.displayTimePlayed = false;
        this.statSetToShow="competitive"; //show competitive stats
        this.onCharSelect(hero); // "select" hero to get competitive stat blocks
        this.displayWinRate = true; //set bool to true to show win rate list
        console.log(this.winRateListToShow);
      }
    }
  }

  displayTimePlayedClick(){ //simpler function since every hero has time played
    this.displayWinRate = false;
    this.displayTimePlayed = true;
  }

  showQuickplayStats(hero){ //quickplay btn is clicked
    if (this.isQuickplay(hero) && this.statSetToShow!="quickplay"){ //if hero exists in quickplay
      this.statSetToShow="quickplay";
      this.onCharSelect(hero); //refresh stat blocks to show qp stats
      this.displayTimePlayedClick(); //switch to time played (as QP doesn't track win rate)
    }
  }

  showCompetitiveStats(hero){ //competitive btn is clicked
    if (this.isCompetitive(hero)  && this.statSetToShow!="competitive"){
      this.statSetToShow="competitive";
      this.onCharSelect(hero); //refresh stat blocks to show competitive stats

    }
  }

  isCompetitive(heroSelected){ //checks to see if hero exists in competitive list
    let listContainsHero = false;
    this.heroListCompetitive.forEach(function(hero){
      if(hero.name === heroSelected.name){
        listContainsHero = true;
      }
    });
    return listContainsHero;
  }

  isQuickplay(heroSelected){ //checks if hero exists in QP list
    let listContainsHero = false;
    this.heroListQuickplay.forEach(function(hero){
      if(hero.name === heroSelected.name){
        listContainsHero = true;
      }
    });
    return listContainsHero;
  }

  showAll(){ //called when "show ___" btn is clicked, toggles between states
    if (this.showAllBool){
      this.showAllBool=false;
      this.showBtnText = "Show All"

      if (this.statSetToShow==="competitive"){
        this.playtimeListToShow = this.playtimeListCompetitiveConcat;
      } else {
        this.playtimeListToShow = this.playtimeListQuickplayConcat;
      }

      this.winRateListToShow = this.winRateListConcat;

    } else{ //showing all
      this.showAllBool=true;
      this.showBtnText = "Show Less"

      this.playtimeListToShow = this.playtimeList;
      this.winRateListToShow = this.winRateList;
    }

  }

  setStats() {
    if (this.statSetToShow === "competitive"){ //assign heroList and playtimeList, which we use later to loop through and find heroSelected
      this.heroList = this.heroListCompetitive;
      this.playtimeList = this.playtimeListCompetitive;

      if (this.showAllBool){
          this.playtimeListToShow = this.playtimeList;
          this.winRateListToShow = this.winRateList;
      } else {
          this.playtimeListToShow = this.playtimeListCompetitiveConcat;
          this.winRateListToShow = this.winRateListConcat;
      }

    } else {
       this.heroList = this.heroListQuickplay;
       this.playtimeList = this.playtimeListQuickplay;

       if (this.showAllBool){
           this.winRateListToShow = this.winRateList;
           this.playtimeListToShow = this.playtimeList;
       } else {
         console.log("show playtimeListQuickplayConcat");
         console.log(this.playtimeListQuickplayConcat);
          this.playtimeListToShow = this.playtimeListQuickplayConcat;
          this.winRateListToShow = this.winRateListConcat;
       }
    };

  }


  sortLists(){ //sort lists by playtime/win rate, and makes concatinated lists
    this.playtimeListCompetitive = this.playtimeListCompetitive.filter(function(hero){
      return (hero.playtime > 0)
    })

    this.playtimeListCompetitive.sort(function(a,b){
      return b.playtime - a.playtime;
    });

    this.playtimeListQuickplay = this.playtimeListQuickplay.filter(function(hero){
      return (hero.playtime > 0)
    })

    this.playtimeListQuickplay.sort(function(a,b){
      return b.playtime - a.playtime;
    });

    this.winRateList = this.winRateList.filter(function(hero){
      return (hero.details > 0)
    })

    this.winRateList.sort(function(a,b){
      return b.details - a.details;
    });

    for (let i = 0; i < 4; i++) {
      this.playtimeListCompetitiveConcat.push(this.playtimeListCompetitive[i]);
    };
    for (let i = 0; i < 4; i++) {
      this.playtimeListQuickplayConcat.push(this.playtimeListQuickplay[i]);
    };
    for (let i = 0; i < 4; i++) {
      this.winRateListConcat.push(this.winRateList[i]);
    };

  }

  setHeroStats(){ //gets data for individual heroes on demand
    let heroStatObj = this.heroSelected.details.hero_stats;
    this.heroStats=Object.keys(heroStatObj).map(function(key){ //loop through JSON obj to get stats
      let keyNoUnderscores = key.replace(/_/g," "); // replace underscores with spaces
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

    this.heroStats.sort(function(a,b){
        return (a.name < b.name) ? -1 : (a.name  > b.name) ? 1 : 0;
    })

    this.generalStats.sort(function(a,b){
        return (a.name < b.name) ? -1 : (a.name  > b.name) ? 1 : 0;
    })

  }

  onCharSelect(hero){ //select a new character
    this.setStats(); // to refresh character stat blocks instantly

    for (let i = 0; i < this.heroList.length; i++) {
        if (hero.name === this.heroList[i].name || hero ===this.heroList[i].name){
          this.heroSelected = this.heroList[i];
          break;
        }
    }
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

    listOptionBtnCompetitive(heroSelected) {
      if(this.isCompetitive(heroSelected)){
        if (this.displayWinRate)
        {
            return "btn btn-info listOptionBtn btn-off"
        } else {
            return "btn btn-info listOptionBtn btn-on"
        }

          } else {
            return "btn btn-info listOptionBtn list-option-btn-disabled"
          }
        }

      listOptionBtnQuickplay(){
        if (this.displayTimePlayed)
        {
          return "btn btn-info listOptionBtn btn-off";
        } else {
          return "btn btn-info listOptionBtn btn-on";
        }
      }



}
