// service for nav build load component
import { Http, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NavBuildLoadService {

  // private headers = new Headers({'Content-Type': 'application/json'});
  // private carrierUrl = 'http://localhost/ajax_transport/angular-master/ajax_add_carrier.php';
  constructor(private http: Http) { }

  // add carrier
  navBuildLoad(id) {
    var json = JSON.stringify({ agent_id: id });
    var params = 'json=' + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //headers.append('Content-Type', 'application/json');

    //return this.http.post('http://validate.jsontest.com',
    return this.http.post('http://localhost/ajax_transport/angular-master/ajax_build_load.php',
      params, {
        headers: headers
      })
      //.map(res => res.json());
      .map(res => res.text() ? res : res.json());
  }

}
