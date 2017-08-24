// search and add a customer to build load component
// uses same service as customer, shipper and receiver components
import { Component } from '@angular/core';
import { SearchShipperService } from '../services/search-shipper.service';
import { AddShipperService } from '../services/add-shipper.service';
@Component({
    selector: 'search-customer',
    templateUrl: './customer.component.html',
    providers: [SearchShipperService, AddShipperService]
})

export class CustomerComponent {
    // search customer
    shippers: array[];
    search_string: number;
    message: string;
    // add customer
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

    //search for a customer
    searchShipper(formValue: any, isFormValid: boolean) {
        if (isFormValid) {
            this.searchShipperService.searchShipper(formValue.search_string)
                .subscribe(
                shippers => {
                    this.shippers = shippers;
                    if (shippers[0] == "not") {
                        this.message = 'Shipper not found';
                        this.listShippers = false;
                    } else {
                        this.message = 'Shipper found';
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

    // add customer
    addCustomer(id: number) {
        this.addShipperService.addCustomer(id)
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

