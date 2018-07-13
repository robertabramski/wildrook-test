import { Component, OnInit } from '@angular/core';
import { Scr, Severity } from '../../services/scr/scr';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { NAV_PADDING } from '../../app.constants';

@Component({
  selector: 'app-severity-graph',
  templateUrl: './severity-graph.component.html',
  styleUrls: ['./severity-graph.component.less'],
  inputs: ['scrs'],
  outputs: ['severityInfo']
})
export class SeverityGraphComponent implements OnInit {
  scrs:Scr[] = null;
  severityInfo:object = null;

  constructor(private scrollToService:ScrollToService) { }

  ngOnInit() {
    this.severityInfo = this.getSeverityInfo(this.scrs);
  }

  scrollToSeverity(severity) {
    let config:ScrollToConfigOptions = {
      target: severity.toLowerCase(),
      duration: 250,
      easing: 'easeInQuad',
      offset: -NAV_PADDING
    };

    this.scrollToService.scrollTo(config);
  }

  private getSeverityInfo(scrs):object {
    /*
    Create object for severity specifics. Derive percentage and
    count data from the returned server data.
    */
    let severityInfo = {};

    scrs.forEach(scr => {
      if(!(scr.severity in severityInfo)) {
        severityInfo[scr.severity] = {count: 1, level: scr.level};
      } else {
        let info = severityInfo[scr.severity];

        info.count++;
        info.percentage = Math.round((info.count / scrs.length) * 100);
      }
    });

    return severityInfo;
  }
}
