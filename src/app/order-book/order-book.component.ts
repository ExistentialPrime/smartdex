import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.scss']
})
export class OrderBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let orderbook = [
      {
        orderDate: '2017-12-12 12:34 pm',
        units: 1500,
        unitType: 'OMG',
        amount: 0.5,
        amountType: 'ETH',
        expireDate: '2017-12-31 11:59 pm',
        totalCost: 750
      },
      {
        orderDate: '2017-12-12 12:34 pm',
        units: 1500,
        unitType: 'OMG',
        amount: 0.5,
        amountType: 'ETH',
        expireDate: '2017-12-31 11:59 pm',
        totalCost: 750
      },
      {
        orderDate: '2017-12-12 12:34 pm',
        units: 1500,
        unitType: 'OMG',
        amount: 0.5,
        amountType: 'ETH',
        expireDate: '2017-12-31 11:59 pm',
        totalCost: 750
      },
      {
        orderDate: '2017-12-12 12:34 pm',
        units: 1500,
        unitType: 'OMG',
        amount: 0.5,
        amountType: 'ETH',
        expireDate: '2017-12-31 11:59 pm',
        totalCost: 750
      },
    ];
  }

}
