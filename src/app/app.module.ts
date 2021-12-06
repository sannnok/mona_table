import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TableHeaderPipe } from './pipes/table-header.pipe';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { PatDataDescriptionPipe } from './pipes/pat-data-description.pipe';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    TableHeaderPipe,
    CustomTableComponent,
    PatDataDescriptionPipe,
    MatTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    ScrollingModule,
    MatTabsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
