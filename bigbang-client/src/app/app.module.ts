import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { firebaseConfig } from "./config/config";
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { StatComponent } from "./stat/stat.component"
import { UserFormComponent} from "./user-form/user-form.component"
import {InputFileComponent} from "./user-form/input-file.component"
import { CheckinComponent } from "./checkin/checkin.component"
import { routing } from "./app.route"

@NgModule({
  declarations: [
    AppComponent,
    StatComponent,
    UserFormComponent,
    InputFileComponent,
    CheckinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
