// SSoT exists here for severity strings.
export enum Severity {
  HIGH   = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW    = 'LOW',
  NONE   = 'NONE'
}

// Set integer value to severity for sorting.
export class SeverityLevel {
  static [Severity.HIGH]   = 3;
  static [Severity.MEDIUM] = 2;
  static [Severity.LOW]    = 1;
  static [Severity.NONE]   = 0;
}

export interface ScrInterface {
  category:string;
  description:string;
  resource:string;
  resourceGroup:string;
  severity:string;
  level:number;
}

// Provide reasonable defaults if data isn't set.
export class Scr implements ScrInterface {
  category:string = 'Uncategorized';
  description:string = 'No description provided.';
  resource:string = 'None';
  resourceGroup:string = 'None';
  severity:string = Severity.NONE;
  level:number = 0;
}
