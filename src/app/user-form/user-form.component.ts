import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers:[FormService]
})
export class UserFormComponent implements OnInit {

  constructor(private formService : FormService) { }

  ngOnInit() {
    //alert(this.formService.getTest());
  }

  findUser(userSearch){
    this.formService.getTest();
  }





}
