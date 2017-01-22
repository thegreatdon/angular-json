import {Component} from '@angular/core'; 
import{PpfDataService} from './ppf-data.service';
@Component({
  selector: 'ppf-shows',
  templateUrl:'app/ppf-data.component.html'
})
  

export class PpfDataComponent{

    shows: PpfData[];

    constructor(private ppfDataService:PpfDataService){}
    ngOnInit(){
        this.ppfDataService.getPpfData().subscribe(shows => this.shows = shows);
    }


  
   
}

        