import { Component} from '@angular/core';

import {Account} from './account';
  // import {AccDataComponent} from './acc-data.component';
  import {AccDataService} from './acc-data.service';
  import {OppDataComponent} from './opp-data.component';
  import {OppDataService} from './opp-data.service';
  import {PrdDataComponent} from './prd-data.component';
  import {PrdDataService} from './prd-data.service';
@Component({
  selector: 'my-app',
  // templateUrl:'app/app.component.html'
  template: `
  <div id="oppdiv">
    <div class="objdiv">
      <div id="acc-spn">
      {{call}} [{{memberstatus}}] | {{city}}, {{state}} {{zip}}
      </div>
       <!-- <acc-data></acc-data> -->
    </div>

    <div class="objdiv">
        <opp-data></opp-data>
    </div>

    <div class="objdiv">
        <prd-data [getMemberStatus]="member"></prd-data>
    </div>
</div>
  `
}) 
export class AppComponent  { 
  account:Account[];
  call:string;
  state:string;
  city:string;
  zip:number;
  memberstatus:string;
  member:boolean;
  // shareMember:boolean;
  
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
              // this.shareMember = accdat.member;
              this.member = accdat.member;
              this.call = accdat.call;
              this.state = accdat.state;
              this.city = accdat.city;
              this.zip = accdat.zip;

          }
         });
                   
      }

  // shareMember:boolean = false;
  // call = "WAMU-FM";
  // state = "DC";
  // city = "Washington";
  // zip = "20009";
  

}
