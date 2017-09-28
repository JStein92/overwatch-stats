import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StatHeaderComponent } from './stat-header/stat-header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    StatHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
