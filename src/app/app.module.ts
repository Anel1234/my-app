import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CanvasComponent } from './canvas/canvas.component';
// import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatInputModule, MatIconModule, MatFormField} from '@angular/material';
// import * as angular from 'angular';
// import { AuthService } from 'src/app/auth/auth.service'

@NgModule({
  declarations: [
    UserComponent,
    AppComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
