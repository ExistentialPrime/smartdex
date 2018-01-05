import {Pipe, OnDestroy} from '@angular/core';
import * as Eth from 'ethjs';
import { BigNumber } from 'bignumber.js';

@Pipe({
  name: 'fromWei'
})

// Angular5 custom Pipe example tutorial: https://codecraft.tv/courses/angular/pipes/custom-pipes/

export class FromWeiPipe implements OnDestroy {

	constructor() {  }

  transform(value: any): string {
		if (value == 0 || value) {
			//let test = value; // for debugging
			let wei = new BigNumber(`${value}`);
			let small = parseFloat(Eth.fromWei(wei, 'ether'));
			return small.toString();

		}
		else {
			return null;
		}

	}

	ngOnDestroy(): void {
    // Do we still need this cleanup function?
	}
	
}
