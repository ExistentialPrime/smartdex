import { Component, OnInit } from '@angular/core';
import { OrderHistory } from '../../models/order-history.model'

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  orderHistory: OrderHistory[] = [
    {
      OrderDate: new Date('2017-12-12 12:34 PM'),
      Token: 'OMG',
      TokenUnits: 1500,
      Status: 'Filled'
    },
    {
      OrderDate: new Date('2017-12-12 12:34 pm'),
      Token: 'OMG',
      TokenUnits: 1500,
      Status: 'Filled'
    },
    {
      OrderDate: new Date('2017-12-12 12:34 pm'),
      Token: 'OMG',
      TokenUnits: 1500,
      Status: 'Filled'
    },
    {
      OrderDate: new Date('2017-12-12 12:34 pm'),
      Token: 'OMG',
      TokenUnits: 1500,
      Status: 'Filled'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
