//service used in customer, shipper and receiver components
// adds a customer, shipper and reciever to build load
import { Http, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AddShipperService {

  // private headers = new Headers({'Content-Type': 'application/json'});
  // private carrierUrl = 'http://localhost/ajax_transport/angular-master/ajax_add_carrier.php';

  constructor(private http: Http) { }

  // add customer
  addCustomer(id: number) {
    var json = JSON.stringify({ shipper_id: id });
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('Content-Type', 'application/json');

    //return this.http.post('http://validate.jsontest.com',
    return this.http.post('http://localhost/ajax_transport/angular-master/ajax_add_customer.php',
      params, {
        headers: headers
      })
      .map(res => res.text() ? res : res.json());
  }

  // add shipper
  addShipper(id: number, checkFlag: boolean) {
    var json = JSON.stringify({ shipper_id: id, check_flag: checkFlag });
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('Content-Type', 'application/json');

    //return this.http.post('http://validate.jsontest.com',
    return this.http.post('http://localhost/ajax_transport/angular-master/ajax_add_shipper.php',
      params, {
        headers: headers
      })
      .map(res => res.text() ? res : res.json());
  }

  // add receiver
  addReceiver(id: number, checkFlag: boolean) {
    var json = JSON.stringify({ shipper_id: id, check_flag: checkFlag });
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('Content-Type', 'application/json');

    //return this.http.post('http://validate.jsontest.com',
    return this.http.post('http://localhost/ajax_transport/angular-master/ajax_add_receiver.php',
      params, {
        headers: headers
      })
      .map(res => res.text() ? res : res.json());
  }

}
