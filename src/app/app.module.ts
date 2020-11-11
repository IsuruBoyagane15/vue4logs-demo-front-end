import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
