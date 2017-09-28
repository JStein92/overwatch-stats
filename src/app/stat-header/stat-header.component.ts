import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-stat-header',
  templateUrl: './stat-header.component.html',
  styleUrls: ['./stat-header.component.css']
})
export class StatHeaderComponent implements OnInit {

  constructor(private formService : FormService) { }

  ngOnInit() {
    let playerStats = this.formService.getPlayerStats();
    console.log(playerStats.us.stats.competitive.overall_stats.level);
  }


}
