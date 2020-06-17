import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-done',
  templateUrl: './register-done.component.html',
  styleUrls: ['./register-done.component.css']
})
export class RegisterDoneComponent implements OnInit {

  username:string;
  firstname:string;
  lastname:string;

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {

      this.username = params["username"];
      this.firstname = params["firstname"];
      this.lastname = params["lastname"];
    });
  }

  ngOnInit() {
  }

}
