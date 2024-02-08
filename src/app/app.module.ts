import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

import localePl from '@angular/common/locales/pl'
import localeEn from '@angular/common/locales/en'
import localeBn from '@angular/common/locales/bn'
import { FormsModule } from '@angular/forms';

registerLocaleData(localePl)
registerLocaleData(localeEn)
registerLocaleData(localeBn)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }