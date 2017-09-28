import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class FormService {
  playerStats;
  //http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=15 - WORKING API
  //https://github.com/SunDwarf/OWAPI/blob/master/api.md - Docs for OV api

  constructor(private http: Http) {}
  //  private usersUrl = 'https://owapi.net/api/v3/u/Chuggsy-11927/blob';

    getData(userId) {
      return this.http.get('https://owapi.net/api/v3/u/'+userId+'/blob')
      .map(this.extractData);
    }

    private extractData(res: Response) {

      return res.json();
      //return body.data || { };
    }

    private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);


    }
    setPlayerStats(userData){
      this.playerStats = userData;
    }

    getPlayerStats(){

    }

  }
