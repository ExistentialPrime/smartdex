import {Pipe, PipeTransform } from '@angular/core';
import * as Eth from 'ethjs';
import { BigNumber } from 'bignumber.js';

@Pipe({
  name: 'fromWei'
})

// Angular5 custom Pipe example tutorial: https://codecraft.tv/courses/angular/pipes/custom-pipes/

export class FromWeiPipe implements PipeTransform {

	constructor() {  }

  transform(value: any): string {
		if (value === 0 || value) {
			let wei = new BigNumber(`${value}`);
			let small = parseFloat(Eth.fromWei(wei, 'ether'));
			return small.toString();
		}
		else {
			return null;
		}

	}

}
