// Modules
// -----------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { NgModule } from '@angular/core';

// Components
// -----------------------------------------------------------
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { OrderBookComponent } from './order-book/order-book.component';
import { SellOrdersComponent } from './sell-orders/sell-orders.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

// Services
// -----------------------------------------------------------
import { ApiService } from './services/api.service';
import { EthService } from './services/eth.service';

// Pipes
// -----------------------------------------------------------
import { TimeAgoPipe } from './pipes/timeAgo.pipe';
import { FromWeiPipe } from './pipes/fromWei.pipe';

// Declarations
// ---------------------------
@NgModule({
  declarations: [
		AppComponent,
    FooterComponent,
		FromWeiPipe,
    HeaderComponent,
    MenuComponent,
    OrderBookComponent,
    OrderHistoryComponent,
    SellOrdersComponent,
		TestComponentComponent,
		TimeAgoPipe
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
