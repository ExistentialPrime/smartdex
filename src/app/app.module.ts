import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { OrderBookComponent } from './order-book/order-book.component';
import { SellOrdersComponent } from './sell-orders/sell-orders.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    OrderBookComponent,
    SellOrdersComponent,
    OrderHistoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
