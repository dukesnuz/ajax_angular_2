// search and add a reciever to build load component
// uses same service as customer, shipper and receiver components
import { Component } from '@angular/core';
import { SearchShipperService } from '../services/search-shipper.service';
import { AddShipperService } from '../services/add-shipper.service';
@Component({
    selector: 'search-receiver',
    templateUrl: './receiver.component.html',
    providers: [SearchShipperService, AddShipperService]
})

export class ReceiverComponent {

    // search for a receiever
    shippers: array[];
    search_string: number;
    message: string;
    // add a receiver
    postData: string;
    id: number;
    listShippers: boolean
    checkFlag: boolean;

    constructor(
        private searchShipperService: SearchShipperService,
        private addShipperService: AddShipperService) {
        this.listShippers = false;
        this.checkFlag = false;
    }

    //search receiever
    searchShipper(formValue: any, isFormValid: boolean) {
        if (isFormValid) {
            this.searchShipperService.searchShipper(formValue.search_string)
                .subscribe(
                shippers => {
                    this.shippers = shippers;
                    if (shippers[0] == "not") {
                        this.message = 'Receiver not found';
                        this.listShippers = false;
                    } else {
                        this.message = 'Receiver found';
                        this.listShippers = true;
                    }
                    console.log(shippers[0]);

                },
                err => console.log(err);
            this.message = 'System Error';
            this.shippers = null;
            this.listShippers = false;
            () =>  //console.log('done');
              }
             );
    }

    // add receiever
    addReceiver(id: number, checkFlag: boolean) {
        this.addShipperService.addReceiver(id, checkFlag)
            .subscribe(
            returned => {
                this.postData = JSON.stringify(returned);
                if (returned._body = "success") {
                    this.message = "Shipper Added";
                } else {
                    this.message = "Server Error";
                }
            },
            err => {
                this.message = 'System Error';
                //console.log(err.status);
            },
            () => {
                //console.log('done');
            },
        );
    }
}


