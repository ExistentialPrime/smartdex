import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as BigNumber from 'bignumber.js';

// import 'ethjs' (typescript friendly version of web3)
// Documentation: https://github.com/ethjs/ethjs/blob/master/docs/user-guide.md
// Note: Traditional 'import { Eth }...' does not work properly
import * as Eth from 'ethjs';

// Requires @0xproject/types dependency to be installed as well
// Documentation: https://0xproject.com/docs/0xjs#installation
// ZeroEx basic tutorial: https://github.com/0xProject/wiki/blob/master/0x.js/Intro-Tutorial:-Create%2C-Validate%2C-Fill-Order.md
import { ZeroEx } from '0x.js';


@Injectable()
export class EthService {

	web3_env: string;
	web3_node: string;

	constructor() {
		this.web3_env = environment.WEB3_ENV;
		this.web3_node = environment.WEB3_NODE;
		
	 }

	 // Display which environment we are running in (Kovan or Mainnet)
	public getEnv(): string { return this.web3_env; }
	

	public testZeroEx(): Promise<any> {
		let provider = new Eth.HttpProvider(this.web3_node);
		let config = this.generateConfig();
		let zrx = new ZeroEx(provider, config);
		let tokenaddr = '0xd0a1e359811322d97991e03f863a0c30c2cf029c'; // ether token
		let addr = '0xcdbe25d67cd8ff96ad4260fe402605a570bc4f69';
		return zrx.token.getBalanceAsync(tokenaddr, addr).then(result => {
			return "Ether token balance: " + result;
		})
	}

	public getConnectedAdrresses(): Promise<string[]> {
		let provider = new Eth.HttpProvider(this.web3_node);
		let config = this.generateConfig();
		let zrx = new ZeroEx(provider, config);
		return zrx.getAvailableAddressesAsync();
	}

	// Get the ether balance of the specified address
	public getBalance(address: string, decimals?: number): Promise<any> {
		let bal = 'Creating web3 node connection...';
		let eth = new Eth(new Eth.HttpProvider(this.web3_node));

		return eth.getBalance(address).then(result => { 
			let amount = Eth.fromWei(result, 'ether');
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

	// ZeroEx config - move this somewhere reusable
	generateConfig() {
    let env = environment.network; // (Kovan network unless building with --prod)
    let config = {
      networkId: env.networkId, // kovan: 42,
      etherTokenContractAddress: env.contracts[`EtherToken`], //kovan: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
      exchangeContractAddress: env.contracts[`Exchange`], //kovan: "0x90fe2af704b34e0224bf2299c838e04d4dcf1364",
      tokenRegistryContractAddress: env.contracts[`TokenRegistry`], //kovan: "0xf18e504561f4347bea557f3d4558f559dddbae7f",
      tokenTransferProxyContractAddress: env.contracts[`TokenTransferProxy`] //kovan: "0x087eed4bc1ee3de49befbd66c662b434b15d49d4"
    }
    return config
  }

}
