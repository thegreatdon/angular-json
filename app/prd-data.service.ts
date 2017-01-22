import {Injectable} from '@angular/core';
import {Products} from './products';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PrdDataService {

    constructor(private http: Http){}
    getPrdData(){
        let products = this.http.get('app/prd-data.json').map(response => <Products[]>response.json().data);
        return products;
    }
}