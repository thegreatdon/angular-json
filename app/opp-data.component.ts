import {Component,Injectable} from '@angular/core'; 
import {Opportunity} from './opportunity';
import{OppDataService} from './opp-data.service';


@Component({
  selector: 'opp-data',
  template:`
<span *ngFor = "let oppdat of opportunity">
{{oppdat.name}} |status: {{oppdat.status}} | oppadminfee: {{oppadminfee | currency:'USD':true}} |totalfee: {{opptotfee | currency:'USD':true}}
</span>`
//   templateUrl:'app/opp-data.component.html'
})
  

export class OppDataComponent{
opportunity:Opportunity[];
public opptotfee:number;
public oppadminfee:number;
    constructor(private oppDataService:OppDataService){}
    ngOnInit(){
        this.oppDataService.getOppData().subscribe(opportunity => {
            this.opportunity = opportunity;
            for (let opp of this.opportunity){
                this.opptotfee = opp.totalprice;
                this.oppadminfee = opp.adminfee;
            }

        });
    }

   
}

        