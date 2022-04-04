import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KincaiditMatTableComponent } from './shared/material-components/kincaidit-mat-table/kincaidit-mat-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';
import { ConfigService } from './service/config.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoadingService } from './service/loading.service';

@NgModule({
  declarations: [
    AppComponent,
    KincaiditMatTableComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [ConfigService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
