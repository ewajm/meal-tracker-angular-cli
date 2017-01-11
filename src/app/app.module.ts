import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EditFudComponent } from './edit-fud/edit-fud.component';
import { FudListComponent } from './fud-list/fud-list.component';
import { FudComponent } from './fud/fud.component';
import { NewFudComponent } from './new-fud/new-fud.component';
import { SummaryComponent } from './summary/summary.component';
import { TotalPipe } from './total.pipe';
import { WorsePipe } from './worse.pipe';
import { CaloriesPipe } from './calories.pipe';
import { AveragePipe } from './average.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EditFudComponent,
    FudListComponent,
    FudComponent,
    NewFudComponent,
    SummaryComponent,
    TotalPipe,
    WorsePipe,
    CaloriesPipe,
    AveragePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
