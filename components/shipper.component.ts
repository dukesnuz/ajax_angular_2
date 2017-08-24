// searches and adds a shipper
// uses same service as customer, shipper and receiver components
import { Component } from '@angular/core';
import { SearchShipperService } from '../services/search-shipper.service';
import { AddShipperService } from '../services/add-shipper.service';

@Component({
    selector: 'search-shipper',
    templateUrl: './shipper.component.html',
    providers: [SearchShipperService, AddShipperService]
})

export class ShipperComponent {

    // search for a shipper
    shippers: array[];
    search_string: number;
    message: string;
    // add a shipper
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

    //search shipper
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

    // add shipper
    addShipper(id: number, checkFlag: boolean) {
        this.addShipperService.addShipper(id, checkFlag)
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

