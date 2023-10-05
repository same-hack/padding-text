import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaddingTextPipe } from './pipe/padding-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PaddingTextPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
