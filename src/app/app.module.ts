import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';




import { AppComponent } from './app.component';
import { SecuritiesComponent } from './securities/securities.component';
import { SecurityDetailComponent } from './security-detail/security-detail.component';
import { SecurityPricesComponent } from './security-prices/security-prices.component';


@NgModule({
  declarations: [
    AppComponent,
    SecuritiesComponent,
    SecurityDetailComponent,
    SecurityPricesComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
