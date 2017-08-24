// service to search and add acaarier to build load component
import { Http, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarrierService {

  // private headers = new Headers({'Content-Type': 'application/json'});
  // private carrierUrl = 'http://localhost/ajax_transport/angular-master/ajax_add_carrier.php';
  constructor(private http: Http) { }

  searchCarrier(search_string: number): Observable<any> {
    //return this.http.get('https://jsonplaceholder.typicode.com/posts')
    return this.http.get(`http://localhost/ajax_transport/angular-master/ajax_carrier_search.php?s_term=${search_string}`)
      .map(res => res.json());
  }

  // add carrier
  addCarrier(id: number) {
    var json = JSON.stringify({ carrier_id: id });
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('Content-Type', 'application/json');

    //return this.http.post('http://validate.jsontest.com',
    return this.http.post('http://localhost/ajax_transport/angular-master/ajax_add_carrier.php',
      params, {
        headers: headers
      })
      //.map(res => res.json());
      .map(res => res.text() ? res : res.json());
  }

}
