import { Filter } from './../../../models/filter';
import { MessengerService } from './../../../services/messenger.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl }  from '@angular/forms';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  from:FormControl = new FormControl("15");
  to:FormControl = new FormControl("200");

  constructor(private messengerService: MessengerService
    ) { }

  ngOnInit() {
  }

  handleFilterByPrice(){

    let filter = new Filter(this.from.value, this.to.value);
    //Send this information to be shred by other compnents throw this service
    this.messengerService.sendFilterMsg(filter);
  }
}
