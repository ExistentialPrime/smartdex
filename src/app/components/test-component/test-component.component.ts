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
	test_web3_coinbase: string;
	test_addresses: string[];

  constructor(private apiService: ApiService, private eth: EthService) { }

  ngOnInit() {
		this.test_web3_output = 'Awaiting web3 command. Using static eth address.';		
		this.paginatedOrderList = 'orders list loading...';
		this.triggerGetOrders();

		this.test_web3_env = this.eth.getEnv();
		this.eth.testZeroEx().then(result => {
			this.test_web3_coinbase = result;
		});
		this.eth.getConnectedAdrresses().then(result => {
			this.test_addresses = result;
			if (result.length < 1) { this.test_addresses = ['none']};
		});
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

	test_getBalance(): void {
		this.test_web3_output = 'Creating web3 node connection...';
		let address = '0xcdbe25d67cd8ff96ad4260fe402605a570bc4f69';
		this.eth.getBalance(address, 5)
			.then(result => this.test_web3_output = result);
	}

}
