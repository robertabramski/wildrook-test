import { localEndpoint, wrEndpoint } from '../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Scr, SeverityLevel } from './scr';

@Injectable({
  providedIn: 'root'
})
export class ScrService {

  // This could probably exist in app.constants.
  private url:string = localEndpoint;

  constructor(private http:HttpClient) { }

  get():Observable<Scr[]> {
    return this.http.get<Scr[]>(this.url).pipe(
      tap(this.normalize),
      catchError(this.handleError('get', []))
    );
  }

  /*
  Normalizing returned data allows the front end to
  determine property naming conventions. This practice protects
  the front end from breaking API changes since the data can
  be remapped here.

  A `level:number` property for severity is added for DOM sorting.
  In a production situation, it may be better to have the front end
  determine what language (and casing) is used for text display.
  An integer value for severity would be easier less brittle.
  */
  private normalize(result) {
    result.forEach(item => {
      item.level = SeverityLevel[item.severity] || SeverityLevel.NONE;
      item.resourceGroup = item.resourcegroup;
      delete item.resourcegroup;
    });
  }

  private handleError(operation='get', result?) {
    return (error) => {
      return of(result);
    }
  }
}
