import { Component, OnInit } from '@angular/core';
import { Scr } from '../../services/scr/scr';

@Component({
  selector: 'app-scr-items',
  templateUrl: './scr-items.component.html',
  styleUrls: ['./scr-items.component.less'],
  inputs: ['scrs'],
  outputs: ['sortedScrs']
})
export class ScrItemsComponent implements OnInit {
  sortedScrs:object = {};
  scrs:Scr[] = null;

  constructor() { }

  ngOnInit() {
    this.scrs.sort((a, b) => {
      return b.level - a.level;
    })
    .forEach(scr => {
      if(!(scr.severity in this.sortedScrs)) {
        this.sortedScrs[scr.severity] = [scr];
      } else {
        this.sortedScrs[scr.severity].push(scr);
      }
    });
  }
}
