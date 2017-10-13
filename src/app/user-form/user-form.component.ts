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
  doneSearching;
  playerStats;
  constructor(private formService : FormService) {
  }
searching;
  ngOnInit() {
    //alert(this.formService.getTest());
  }

  findUser(userSearch){
    this.searching=true;
    this.formService.getData(userSearch).subscribe(
      userData => {
          this.playerStats = userData;
          this.playerName = userSearch;
        },
      userData => {
          console.log("ERROR: ",userData);
      },
      () => {
      //    console.log("Completed");
          this.formService.setPlayerStats(this.playerStats, this.playerName);
          this.doneSearching=true;
      }
    );
  }







}
