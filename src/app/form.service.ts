import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()

export class FormService {
  playerStats;

  //http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=15 - WORKING API
  //https://github.com/SunDwarf/OWAPI/blob/master/api.md - Docs for OV api

  constructor(http: Http) {
    http.get('https://owapi.net/api/v3/u/Chuggsy-11927/stats?format=json')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          this.playerStats = (data);
        });
    }

  getTest(){
    return console.log(this.playerStats);
  }

  }
