import { Component, OnInit } from '@angular/core';
import { EthService } from '../../services/eth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import swal from 'sweetalert2';

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

	toggleBg = '#999999';
	toggleSwitch = '#cccccc';

	// Constructor
  constructor(private eth: EthService) { }

	// Initialization
  ngOnInit() {
		// Scaffold the wallet structure and 0 balances
		this.scaffoldWallet();

		// Testing stuff, remove later
		this.test_web3_env = this.eth.getEnv();

		// Ensure connection to MetaMask/web3
		this.connectToMetaMask();

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


	// Check if metamask is installed (move this to the header component later)
	// TODO: async update after metamask is unlocked to prevent a manual page refresh
	private connectToMetaMask() {
		if (this.eth.isMetaMaskConnected() === false) {
			this.warningModal('Notice:', 'MetaMask is not connected! Please connect before continuing.');
			this.isConnectedToWeb3 = false;
		}
		else {
			this.eth.isMetaMaskUnlocked().then(result => {
				this.isConnectedToWeb3 = true;
				this.getWeb3Data().then(() => {
					this.getWalletBalances();
				});

			}).catch(error => {
				this.warningModal('Alert', 'MetaMask is locked! Please unlock before continuing.');
			});
		}

	}

	// After we are connected to metamask, use this to get the address
	getWeb3Data(): Promise<any> {
		return this.eth.getConnectedAdrresses().then(result => {
			this.connectedAddress = result[0];
			return Promise.resolve();
		}).catch(error => {
			return Promise.reject(error);
		});
	}

	warningModal(title: string, message: string): void {
		swal({
			title: title,
			text: message,
			type: 'error',
		});
	}

}

/* Notes

$('#main-wallet').css({ right: '-500px' })

*/
