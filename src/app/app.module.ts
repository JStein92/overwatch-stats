import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StatHeaderComponent } from './stat-header/stat-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightsComponent } from './highlights/highlights.component';
import { TimePlayedComponent } from './time-played/time-played.component';
import { WinRateComponent } from './win-rate/win-rate.component';
@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    StatHeaderComponent,
    HighlightsComponent,
    TimePlayedComponent,
    WinRateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
