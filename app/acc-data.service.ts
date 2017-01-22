import {Injectable} from '@angular/core';
import {Account} from './account';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccDataService {

    constructor(private http: Http){}
    getAccData(){
        return this.http.get('app/acc-data.json')
            .map(response => <Account[]>response.json().data);
    }
}