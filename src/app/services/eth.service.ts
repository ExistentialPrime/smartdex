import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import Web3 = require('web3');
//import { ZeroEx } from '0x.js';

@Injectable()
export class EthService {

	web3_env: string;
	web3_node: string;

	constructor() {
		this.web3_env = environment.WEB3_ENV;
		this.web3_node = environment.WEB3_NODE;
	 }

	public getEnv(): string { return this.web3_env; }
	
	public getBalance(address: string, decimals?: number): Promise<any> {
		let bal = 'Creating web3 node connection...';
		let web3 = new Web3(new Web3.providers.HttpProvider(environment.WEB3_NODE));
		
		// Note: web3.eth.getBalance returns a Promise<number> by default
		return web3.eth.getBalance(address).then(result => { 
			let amount = web3.utils.fromWei(result, 'ether');
			if (decimals) { amount = parseFloat(amount).toFixed(decimals); }
			bal = `Balance: ${amount} ETH`;
			bal += ` (${result} gwei)`;
			return bal;
		})
		.catch(error => {
			bal = 'Error: ' + error;
				return bal;
		});
	}

}
