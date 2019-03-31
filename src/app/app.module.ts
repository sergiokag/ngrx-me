import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CustomListComponent } from './components/custom-list/custom-list.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { reducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    CustomListComponent,
    CustomFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
