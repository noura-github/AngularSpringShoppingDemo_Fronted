import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username='';
  password='';
  submitted:boolean=false;

  invalidLogin = false;
  loginSuccess = false;
 
  badcredentials = false;
  errorMessage401 = 'Invalid Credentials';

  noconnection = false;
  errorMessage504 = 'Connection with server is lost';

  unknownproblem = false;
  errorMessage = 'Unknown problem occurred';

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){

    event.preventDefault();

    this.submitted=true;

    this.authentication.loginUser(this.username, this.password).subscribe((customer:any) => { 

        this.invalidLogin = false;
        this.loginSuccess = true;
        this.router.navigate(['account'])
     },
     (error) => {
        this.invalidLogin = true;
        this.loginSuccess = false;

        this.badcredentials=false;
        this.noconnection=false;
        this.unknownproblem=false;

        switch(error.status){
          case 401: this.badcredentials=true;break;
          case 504: this.noconnection=true;break;
          default: this.unknownproblem=true;break;
        }

      });

  }

}
