import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrService } from './services/scr/scr.service';
import { AppComponent } from './app.component';
import { SeverityGraphComponent } from './components/severity-graph/severity-graph.component';
import { KeysPipe } from './pipes/keys/keys.pipe';
import { ScrItemComponent } from './components/scr-item/scr-item.component';
import { ScrItemsComponent } from './components/scr-items/scr-items.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    SeverityGraphComponent,
    KeysPipe,
    ScrItemComponent,
    ScrItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
