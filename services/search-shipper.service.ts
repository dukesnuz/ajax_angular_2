//service used in customer, shipper and receiver components
// searches for a customer, shipper and receiver
import { Http, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchShipperService {

  // private headers = new Headers({'Content-Type': 'application/json'});
  // private carrierUrl = 'http://localhost/ajax_transport/angular-master/ajax_shipper_search.php?s_term=${search_string}';

  constructor(private http: Http) { }

  searchShipper(search_string: number): Observable<any> {
    //return this.http.get('https://jsonplaceholder.typicode.com/posts')
    return this.http.get(`http://localhost/ajax_transport/angular-master/ajax_shipper_search.php?s_term=${search_string}`)
      .map(res => res.json());
  }
}
