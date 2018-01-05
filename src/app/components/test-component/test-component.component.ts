import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
	isConnectedToWeb3: boolean = false;
	connectedAddress: string;

	constructor(
		private apiService: ApiService,
		private eth: EthService,
		private modalService: NgbModal
	) { }

  ngOnInit() {
		this.paginatedOrderList = 'orders list loading...';
		this.triggerGetOrders();

		

		// Check if metamask is installed (move this to the header component later)
		if (this.eth.isMetaMaskConnected() == false)
		{
			//alert('MetaMask is not connected! Please connect before continuing.');
			this.isConnectedToWeb3 = false;
		}
		else {
			this.eth.isMetaMaskUnlocked().then(result => {
				this.isConnectedToWeb3 = true;
			}).catch(error => { 
				//alert('MetaMask is locked! Please unlock before continuing.');
			});
		}


		// Grab web3 connection info and wallet data
		if (this.isConnectedToWeb3) {
			this.getWeb3Data().then(() => {
				//this.getWalletBalances();
			});
		}

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

	
	open(content) {
    this.modalService.open(content).result.then((result) => {
      console.log(`Modal Closed with: ${result}`);
    }, (reason) => {
      console.log(`Modal Dismissed ${reason} - probably ESCAPE`);
    });
  }
	

}
