import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { Ng2MobxModule } from 'ng2-mobx';

import { AppComponent } from './app.component';
import { FrameworksFilterComponent } from './frameworks-filter/frameworks-filter.component';
import { SelectedFrameworksComponent } from './selected-frameworks/selected-frameworks.component';
import { HeaderComponent } from './header/header.component';
import { ChangeDetectionCounterComponent } from './change-detection-counter/change-detection-counter.component';
import { NewFrameworkComponent } from './new-framework/new-framework.component';
import { FrameworksListComponent } from './frameworks-list/frameworks-list.component';
import { Frameworks } from './stores/frameworks.store';

@NgModule({
  declarations: [
    AppComponent,
    FrameworksFilterComponent,
    SelectedFrameworksComponent,
    HeaderComponent,
    ChangeDetectionCounterComponent,
    NewFrameworkComponent,
    FrameworksListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Ng2MobxModule
  ],
  providers: [Frameworks],
  bootstrap: [AppComponent]
})
export class AppModule { }
