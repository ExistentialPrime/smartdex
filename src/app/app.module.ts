import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { OrderBookComponent } from './order-book/order-book.component';
import { SellOrdersComponent } from './sell-orders/sell-orders.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

import { ApiService } from './services/api.service';
import { EthService } from './services/eth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    OrderBookComponent,
    SellOrdersComponent,
    OrderHistoryComponent,
    FooterComponent,
    TestComponentComponent
  ],
  imports: [
		BrowserModule,
		HttpClientModule
  ],
  providers: [
		ApiService,
		EthService
	 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
