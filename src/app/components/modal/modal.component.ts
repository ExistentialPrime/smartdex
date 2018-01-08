import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  constructor(
		private modalService: NgbModal
	) { }

  ngOnInit() {
		// TODO
	}

	open(content) {
    this.modalService.open(content).result.then((result) => {
      console.log(`Modal Closed with: ${result}`);
    }, (reason) => {
      console.log(`Modal Dismissed ${this.getDismissReason(reason)}`);
    });
	}

	private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
