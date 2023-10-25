import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './main/card/card.component';
import { BigButtonComponent } from './main/big-button/big-button.component';
import { OptionsComponent } from './main/options/options.component';
import { FooterComponent } from './main/footer/footer.component';
import { TipComponent } from './main/card/tip/tip.component';
import { InputCardComponent } from './main/card/input-card/input-card.component';
import { SmallButtonComponent } from './main/card/tip/small-button/small-button.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    BigButtonComponent,
    SmallButtonComponent,
    OptionsComponent,
    FooterComponent,
    TipComponent,
    InputCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
