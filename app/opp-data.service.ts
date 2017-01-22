import {Injectable} from '@angular/core';
import {Opportunity} from './opportunity';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OppDataService {

    constructor(private http: Http){}
    getOppData(){
        return this.http.get('app/opp-data.json')
            .map(response => <Opportunity[]>response.json().data);
    }
}