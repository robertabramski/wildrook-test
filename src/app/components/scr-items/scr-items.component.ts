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
  scrs:Scr[] = null;
  sortedScrs:object = {};
  scrItemsVisible:boolean[] = [];

  constructor() { }

  toggleScrItems(i) {
    this.scrItemsVisible[i] = !this.scrItemsVisible[i];
  }

  ngOnInit() {
    this.scrs.sort((a, b) => {
      return b.level - a.level;
    })
    .forEach(scr => {
      if(!(scr.severity in this.sortedScrs)) {
        this.sortedScrs[scr.severity] = [scr];
        this.scrItemsVisible.push(true);
      } else {
        this.sortedScrs[scr.severity].push(scr);
      }
    });
  }
}
