import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EthService } from '../../services/eth.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

	paginatedOrderList: any; // API returns an object with page info and 'data' array	

	test_web3_env: string;
	test_web3_output: any;
	wallet_balances: any = {};
	isConnectedToWeb3: boolean = false;
	connectedAddress: string;

  constructor(private apiService: ApiService, private eth: EthService) { }

  ngOnInit() {
		this.test_web3_output = 'Awaiting web3 command. Using static eth address.';		
		this.paginatedOrderList = 'orders list loading...';
		this.triggerGetOrders();

		// Scaffold the wallet structure and 0 balances
		this.scaffoldWallet();

		// Check if metamask is installed (move this to the header component later)
		if (this.eth.isMetaMaskConnected() == false)
		{
			alert('MetaMask is not connected! Please connect before continuing.');
			this.isConnectedToWeb3 = false;
		}
		else {
			this.eth.isMetaMaskUnlocked().then(result => {
				this.isConnectedToWeb3 = true;
			}).catch(error => { 
				alert('MetaMask is locked! Please unlock before continuing.');
			});
		}


		// Grab web3 connection info and wallet data
		this.getWeb3Data().then(() => {
			this.getWalletBalances();
		});

		// Testing stuff, remove later
		this.test_web3_env = this.eth.getEnv();
	}
	
	triggerGetOrders(): void { 
		this.apiService.getOrders().subscribe(
			data => { 
				this.paginatedOrderList = data
			},
			err => console.error('Error fetching orders: ', err), // or can display the error in a modal here
			() => console.log('done loading orders')
		);
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

	test_getBalance(): void {
		this.test_web3_output = 'Creating web3 node connection...';
		let address = '0xcdbe25d67cd8ff96ad4260fe402605a570bc4f69';
		this.eth.testGetBalance(address, 5)
			.then(result => this.test_web3_output = result);
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

}
