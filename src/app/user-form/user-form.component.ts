import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers:[FormService]
})
export class UserFormComponent implements OnInit {
  level;
  compRank;
  avatar;
  tier;
  playerName;

  playerStats;
  constructor(private formService : FormService) {
  }

  ngOnInit() {
    //alert(this.formService.getTest());
  }

  findUser(userSearch){
    this.formService.getData(userSearch).subscribe(
      userData => {
          this.playerStats = userData;
          this.playerName = userSearch;
        },
      userData => {
          console.log("ERROR: ",userData);
      },
      () => {
          console.log("Completed");
          this.setStats();
          this.formService.setPlayerStats(this.playerStats);

      }
    );
  }

  setStats() {
    this.level = this.playerStats.us.stats.competitive.overall_stats.level;
    this.compRank = this.playerStats.us.stats.competitive.overall_stats.comprank;
    this.avatar = this.playerStats.us.stats.competitive.overall_stats.avatar;
    this.tier = this.playerStats.us.stats.competitive.overall_stats.tier;
  }





}
