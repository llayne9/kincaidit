import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KincaiditMatTableComponent } from './shared/material-components/kincaidit-mat-table/kincaidit-mat-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { ConfigService } from './service/config.service';

@NgModule({
  declarations: [
    AppComponent,
    KincaiditMatTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
