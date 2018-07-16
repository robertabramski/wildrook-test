import { Component, OnInit } from '@angular/core';
import { Scr, Severity } from '../../services/scr/scr';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { NAV_PADDING } from '../../app.constants';

@Component({
  selector: 'app-severity-graph',
  templateUrl: './severity-graph.component.html',
  styleUrls: ['./severity-graph.component.less'],
  inputs: ['scrs'],
  outputs: ['severityInfo', 'graphWidths']
})
export class SeverityGraphComponent implements OnInit {
  scrs:Scr[] = null;
  severityInfo:object = {};
  graphWidths:object = {};

  private ROLLOVER_PERCENT_INCREASE = 15;

  constructor(private scrollToService:ScrollToService) { }

  ngOnInit() {
    this.createGraphData(this.scrs);
  }

  revertGraphRollover() {
    for(let severity in this.severityInfo) {
      let percentage = this.severityInfo[severity].percentage;
      this.graphWidths[severity] = percentage;
    }
  }

  expandGraph(key) {
    for(let severity in this.graphWidths) {
      if(severity === key) {
        let origPercentage = this.severityInfo[key].percentage;
        this.graphWidths[key] = origPercentage + this.ROLLOVER_PERCENT_INCREASE;
      }
    }
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

  private createGraphData(scrs) {
    /*
    Create object for severity specifics. Derive percentage and
    count data from the returned server data.

    Rather than creating another loop for graph width data, handle
    in this function as general data parsing.
    */
    scrs.forEach(scr => {
      if(!(scr.severity in this.severityInfo)) {
        this.severityInfo[scr.severity] = {count: 1, level: scr.level};
      } else {
        let info = this.severityInfo[scr.severity];

        info.count++;
        info.percentage = Math.round((info.count / scrs.length) * 100);

        // Add graph data for rollovers.
        this.graphWidths[scr.severity] = info.percentage;
      }
    });
  }
}
