import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  customer:Customer;

  constructor() { }

  ngOnInit() {

    this.getNavParams();
  }

  getNavParams(){

    let data = localStorage.getItem('customer');

    this.customer = JSON.parse(data);
  }
}
