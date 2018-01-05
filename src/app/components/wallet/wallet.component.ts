import { Component, OnInit } from '@angular/core';
import { EthService } from '../../services/eth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-wallet',
	templateUrl: './wallet.component.html'
})
export class WalletComponent implements OnInit {

	// Properties 
	test_web3_env: string;
	wallet_balances: any = {};
	isConnectedToWeb3: boolean = false;
	connectedAddress: string;

	// Constructor
  constructor(private eth: EthService) { }

	// Initialization
  ngOnInit() {
		// Scaffold the wallet structure and 0 balances
		this.scaffoldWallet();
		
		// Testing stuff, remove later
		this.test_web3_env = this.eth.getEnv();

		// Grab web3 connection info and wallet data
		if (this.isConnectedToWeb3) {
			this.getWeb3Data().then(() => {
				this.getWalletBalances();
			});
		}

	}
	

	scaffoldWallet(): void {
		this.wallet_balances = {};
		this.wallet_balances.eth = 0.00;
		this.wallet_balances.weth = 0.00;
		this.wallet_balances.gnt = 0.00;
		this.wallet_balances.zrx = 0.00;
	}

	getWalletBalances(): void {
		if (this.isConnectedToWeb3 && this.connectedAddress) {
			// ETH
			this.eth.getEthBalance(this.connectedAddress)
			.then(result => this.wallet_balances.eth = result);
			// WETH
			this.eth.getWethBalance(this.connectedAddress)
			.then(result => this.wallet_balances.weth = result);
			// All Others (GNT and ZRX for now)
			this.eth.getTokenBalanceGNT(this.connectedAddress)
			.then(result => this.wallet_balances.gnt = result);
			this.eth.getTokenBalanceZRX(this.connectedAddress)
			.then(result => this.wallet_balances.zrx = result);
		}
	}

	getWeb3Data(): Promise<any> {
		// Address
		return this.eth.getConnectedAdrresses().then(result => {
			this.connectedAddress = result[0];			
			return Promise.resolve();
		}).catch(error => {
			return Promise.reject(error);
		});
		
	}

}

/* Notes

$('#main-wallet').css({ right: '-500px' })

*/
