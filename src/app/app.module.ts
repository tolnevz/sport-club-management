import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCommonModule } from './app.common.module';
import { HttpClientModule } from '@angular/common/http';

// Needs for Russian lang
// import { registerLocaleData } from '@angular/common';
// import localeRu from '@angular/common/locales/ru';

// registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppCommonModule,
    SharedModule,
    HttpClientModule,

  ],
  // providers: [{ provide: LOCALE_ID, useValue: "ru" },],
  bootstrap: [AppComponent],
})
export class AppModule {}
