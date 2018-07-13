import { Component, OnInit } from '@angular/core';
import { ScrService } from './services/scr/scr.service';
import { Scr } from './services/scr/scr';
import { SeverityGraphComponent } from './components/severity-graph/severity-graph.component';
import { NAV_PADDING } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  outputs: ['navOffsetPadding']
})
export class AppComponent implements OnInit {
  scrs:Scr[] = null;
  navOffsetPadding:number = NAV_PADDING;

  constructor(private scrService:ScrService) {}

  ngOnInit() {
    this.scrService.get().subscribe(scrs => {
      this.scrs = scrs;
    });
  }
}
