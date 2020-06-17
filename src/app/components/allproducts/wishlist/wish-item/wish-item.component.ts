import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css']
})
export class WishItemComponent implements OnInit {

  @Input() wishItem: any;

  constructor() { }

  ngOnInit() {
  }

}
