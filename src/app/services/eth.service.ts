import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { BigNumber } from 'bignumber.js';

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

	// Variables
	@Output() update = new EventEmitter();
	private nodeConnected: boolean = true;    // If we've established a connection yet
	private nodeUnlocked: boolean = false;	  // Is MetaMask unlocked
	private web3Instance: Eth;                // Current instance of web3
	private unlockedAccount: string;          // Current unlocked account


	// Constructor
	constructor() {	 }

	 // Display which environment we are running in (Kovan or Mainnet)
	public getEnv(): string { return environment.WEB3_ENV; }

	// Check if MetaMask is connected
	public isMetaMaskConnected(): boolean {
		this.nodeConnected = typeof window['web3'] !== 'undefined';
		return this.nodeConnected;
	} 

	// Check if MetaMask is unlocked
	public isMetaMaskUnlocked(): Promise<boolean> {
		// Need to use the web3 version because metamask sucks
		return new Promise ((resolve, reject) => {
			this.eth.eth.getAccounts((error, accounts) => { 
				if (error) { reject(error); }
				else {
					if (accounts.length > 0)
					  resolve(true); 
					else
						reject(false);
				}
			})
		});
	}
	

	// Test ZeroEx by connecting directly to infura, not metamask
	public testZeroEx(): Promise<any> {
		let provider = new Eth.HttpProvider(environment.WEB3_NODE);
		let config = this.generateConfig();
		let zrx = new ZeroEx(provider, config);
		let tokenaddr = '0xd0a1e359811322d97991e03f863a0c30c2cf029c'; // ether token
		let addr = '0xcdbe25d67cd8ff96ad4260fe402605a570bc4f69';
		return zrx.token.getBalanceAsync(tokenaddr, addr).then(result => {
			return "WETH token balance: " + Eth.fromWei(result, 'ether');;
		})
	}

	public getConnectedAdrresses(): Promise<string[]> {
		// Connect to metamask
		this.eth = new this.Web3(window['web3'].currentProvider);
		
		//let provider = new Eth.HttpProvider(environment.WEB3_METAMASK); //(this.web3_node);
		let config = this.generateConfig();
		//let zrx = new ZeroEx(provider, config);
		let zrx = new ZeroEx(this.eth.currentProvider, config);

		zrx.getAvailableAddressesAsync().then(result => {
			let temp = result;
		});
		return zrx.getAvailableAddressesAsync();
	}

	// Get the ether balance of the specified address (ethjs promise version)
	public testGetBalance(address: string, decimals?: number): Promise<any> {
		let bal = 'Creating web3 node connection...';
		let eth = new Eth(new Eth.HttpProvider(environment.WEB3_NODE));

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

	// Returns the balance of ETH (not in gwei)
	public getEthBalance(address: string): Promise<any> {
	
		return new Promise ((resolve, reject) => {
			// we have to use the web3 version of this call beacause MetaMask sucks
			this.eth.eth.getBalance(address, (error, result) => { 
				if (error) { reject(error); }
				else { resolve(result); }
			});
		});
		
	}

	// Returns the connected MetaMask accounts WETH balance
	public getWethBalance(address: string): Promise<any> {

		// make ZRX reusable like eth
		let config = this.generateConfig();
		let zrx = new ZeroEx(this.eth.currentProvider, config);
		let token = environment.network.contracts.EtherToken;
		return zrx.token.getBalanceAsync(token, address);
	}


	// Return a json array with balances for all tokens
	public getTokenBalanceGNT(address: string): Promise<any> {
		// make zrx reusable
		let config = this.generateConfig();
		let zrx = new ZeroEx(this.eth.currentProvider, config);
		let token = environment.network.contracts.GNTToken;
		return zrx.token.getBalanceAsync(token, address)
	}
	public getTokenBalanceZRX(address: string): Promise<any> {
		// make zrx reusable
		let config = this.generateConfig();
		let zrx = new ZeroEx(this.eth.currentProvider, config);
		let token = environment.network.contracts.ZRXToken;
		return zrx.token.getBalanceAsync(token, address)
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
	


	// ------------------------------------
	// Make our web3Instance (this.eth) available on demand
	// From: https://github.com/oraclize/dapp-stackexchange-bounty/blob/master/web-ui/src/client/app/shared/web3/web3.service.ts
	// ------------------------------------

	intializeWeb3(): void {
		if (typeof window['web3'] !== 'undefined') {
			this.eth = new this.Web3(window['web3'].currentProvider);
			this.nodeConnected = true;
			this.update.emit(null);
		}
		else {
			this.nodeConnected = false;
		}
	}


	get eth(): any {
		if (!this.web3Instance) {
				this.intializeWeb3();
		}
		return this.web3Instance;
	}
	set eth(web3: any) {
			this.web3Instance = web3;
	}

	get Web3(): any {
		return window['Web3'];
	}

	weiToEth(wei: number): number {
		return parseFloat(Eth.fromWei(wei, 'ether'));
	}

	// When passed in 1 (ETHER) returns 1000000... (wei)
	toBaseUnit(number) {
    return ZeroEx.toBaseUnitAmount(new BigNumber(`${number}`), 18);
  }

	// When passed in 10000000... (wei) returns 1 (ETHER)
  toUnit(number) {
    return ZeroEx.toUnitAmount(new BigNumber(`${number}`), 18);
  }


}
