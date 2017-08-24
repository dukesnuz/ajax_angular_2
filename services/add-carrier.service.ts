import { Http, Headers } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//https://angular.io/tutorial/toh-pt6
//https://www.youtube.com/watch?v=L7xPwhwbcHE

// not using
/*
@Injectable()
export class AddCarrierService {
     
  // private headers = new Headers({'Content-Type': 'application/json'});
  // private carrierUrl = 'http://localhost/ajax_transport/angular-master/ajax_add_carrier.php';

   constructor (private http: Http){}
     
      addCarrier(id)  {
          var json = JSON.stringify({carrier_id: id});
           //var json = JSON.stringify();
          var params = 'json=' + json;
         //var params =  json;
          var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');

          //return this.http.post('http://validate.jsontest.com',
          return this.http.post('http://localhost/ajax_transport/angular-master/ajax_add_carrier.php',
        params,{
            headers: headers
        })
        .map(res => res.json());
      }
}
