import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CanvasComponent } from './canvas/canvas.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {
  MatToolbarModule,
  MatTableModule,
  MatIconModule,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  declarations: [
    UserComponent,
    AppComponent,
    CanvasComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
