import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { WarningOptions } from '../warning-options';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.css']
})
export class WarningDialogComponent implements OnInit {

  @ViewChild('warningcontent', { static: false }) public content: ElementRef;

  @Input() warningOptions: WarningOptions = new WarningOptions();

  constructor() { }

  ngOnInit() {
  }

  getContent(){
    return this.content;
  }
}
