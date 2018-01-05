// Modules
// -----------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';

// Components
// -----------------------------------------------------------
import { AppComponent } from './components/app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './components/modal/modal.component';
import { OrderBookComponent } from './order-book/order-book.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SellOrdersComponent } from './sell-orders/sell-orders.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { WalletComponent } from './components/wallet/wallet.component';

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
		ModalComponent,
    OrderBookComponent,
    OrderHistoryComponent,
    SellOrdersComponent,
		TestComponentComponent,
		TimeAgoPipe,
		WalletComponent
  ],
  imports: [
		BrowserModule,
		HttpClientModule,
		NgbModule.forRoot(),
		UiSwitchModule
  ],
  providers: [
		ApiService,
		EthService
	 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
