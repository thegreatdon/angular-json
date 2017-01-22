import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PpfDataService {

    constructor(private http: Http){}
    getPpfData(){
        return this.http.get('app/ppf-data.json')
            .map(response => <Show[]>response.json().data);
    }
}