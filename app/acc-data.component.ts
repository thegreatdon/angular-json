import {Component, Input } from '@angular/core'; 
import {Account} from './account';
import{AccDataService} from './acc-data.service';
@Component({
  selector: 'acc-data',
  templateUrl:'app/acc-data.component.html',
  styleUrls:['app/acc-data.css']
})
  

export class AccDataComponent{

account:Account[];
memberstatus:string;
member:boolean;

    constructor(private accDataService:AccDataService){}
    ngOnInit(){
        this.accDataService.getAccData().subscribe(account => {
        this.account = account;
        for(let accdat of this.account){
            if (accdat.member == true){
                this.memberstatus = "Member Station";
            }
            else{
                this.memberstatus = "Non-Member Station";
            }
            this.member = accdat.member;
        }
       });
                 
    }

   
}

        