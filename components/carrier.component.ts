
//searches and adds a carrier
import { Component } from '@angular/core';
import { CarrierService } from '../services/carrier.service';

@Component({
    selector: 'search-carrier',
    templateUrl: './carrier.component.html',

    providers: [CarrierService]
})

export class CarrierComponent {

    //search carrier
    carriers: array[];
    search_string: number;
    message: string;
    // add carrier
    postData: string;
    id: number;
    carrierList: boolean;

    constructor(private carrierService: CarrierService) {
        this.carrierList = false;
    }

    searchCarrier(formValue: any, isFormValid: boolean) {
        if (isFormValid) {
            this.carrierService.searchCarrier(formValue.search_string)
                .subscribe(
                carriers => {
                    this.carriers = carriers;
                    if (carriers[0] == "not") {
                        this.message = 'Carrier not found';
                        this.carrierList = false;
                    } else {
                        this.message = 'Carrier found';
                        this.carrierList = true;
                    }
                    console.log(carriers[0]);

                },
                err => console.log(err);
            this.message = 'System Error';
            this.carriers = null;
            this.carrierList = false;
            () =>  //console.log('done');
            }
         );
    }

    // add carrier
    addCarrier(id: number) {
        this.carrierService.addCarrier(id)
            .subscribe(
            returned => {
                this.postData = JSON.stringify(returned);
                if (returned._body = "success") {
                    this.message = "Carrier Added";
                } else {
                    this.message = "Server Error";
                }
            },
            err => {
                this.message = 'System Error';
                //console.log(err);
            },
            () => {
                //console.log('done');
            },
        );
    }
}

