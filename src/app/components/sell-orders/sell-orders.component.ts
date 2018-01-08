import { Component, OnInit } from '@angular/core';
import { SellOrder } from '../../models/sell-order.model'

@Component({
  selector: 'app-sell-orders',
  templateUrl: './sell-orders.component.html',
  styleUrls: ['./sell-orders.component.scss']
})
export class SellOrdersComponent implements OnInit {

  sellOrders: SellOrder[] = [
    {
      OrderNumber: 12345,
      Token: 'OMG',
      Units: 1500,
      AskPrice: 0.5,
      AskPriceType: 'ETH',
      NumberFilled: 300,
      PercentFilled: 0.2
    },
    {
      OrderNumber: 12345,
      Token: 'OMG',
      Units: 1500,
      AskPrice: 0.5,
      AskPriceType: 'ETH',
      NumberFilled: 300,
      PercentFilled: 0.2
    },
    {
      OrderNumber: 12345,
      Token: 'OMG',
      Units: 1500,
      AskPrice: 0.5,
      AskPriceType: 'ETH',
      NumberFilled: 300,
      PercentFilled: 0.2
    },
    {
      OrderNumber: 12345,
      Token: 'OMG',
      Units: 1500,
      AskPrice: 0.5,
      AskPriceType: 'ETH',
      NumberFilled: 300,
      PercentFilled: 0.2
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
