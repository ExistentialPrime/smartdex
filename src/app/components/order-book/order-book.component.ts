import { Component, OnInit } from '@angular/core';
import { OrderBook } from '../../models/order-book.model';

@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.scss']
})
export class OrderBookComponent implements OnInit {

  tokens: string[] = [
    'OMG', 'EOS', 'QTUM', 'TAAS'
  ];

  orderbook: OrderBook[] = [
    {
      OrderDate: new Date('2017-12-12 12:34 pm'),
      Units: 1500,
      UnitType: 'OMG',
      Amount: 0.5,
      AmountType: 'ETH',
      ExpirationDate: new Date('2017-12-31 11:59 pm'),
      TotalCost: 750
    },
    {
      OrderDate: new Date('2017-12-12 12:34 pm'),
      Units: 1500,
      UnitType: 'OMG',
      Amount: 0.5,
      AmountType: 'ETH',
      ExpirationDate: new Date('2017-12-31 11:59 pm'),
      TotalCost: 750
    },
    {
      OrderDate: new Date('2017-12-12 12:34 pm'),
      Units: 1500,
      UnitType: 'OMG',
      Amount: 0.5,
      AmountType: 'ETH',
      ExpirationDate: new Date('2017-12-31 11:59 pm'),
      TotalCost: 750
    },
    {
      OrderDate: new Date('2017-12-12 12:34 pm'),
      Units: 1500,
      UnitType: 'OMG',
      Amount: 0.5,
      AmountType: 'ETH',
      ExpirationDate: new Date('2017-12-31 11:59 pm'),
      TotalCost: 750
    },
  ];

  constructor() { }

  ngOnInit() {

  }

}
