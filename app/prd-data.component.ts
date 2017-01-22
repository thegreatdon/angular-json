import {Component,Input,OnInit} from '@angular/core'; 
import {Products} from './products';
import{PrdDataService} from './prd-data.service';


// import {Opportunity} from './opportunity';
// import{OppDataService} from './opp-data.service';


@Component({
  selector: 'prd-data',
  templateUrl:'app/prd-data.component.html',
  styleUrls:['app/prd-data.component.css']
})
  

export class PrdDataComponent{

products:Products[];
subtotal:number;
member:boolean;
adminfee:number;
totalprice:number;
_getMemberStatus : string; 

    constructor(private prdDataService:PrdDataService){}
    @Input()
    //import 'member' variable from app.component.ts
    set getMemberStatus(member:boolean ){
        this.member = member;
    }


    ngOnInit(){
        this.prdDataService.getPrdData().subscribe(products => {
        this.products = products;
        //this.member = false;
        this.adminfee = 2500;

          let subtotal = 0;
          for(let show of this.products){
            if (show.include == true){
            subtotal += show.price;
            }
          }
          this.subtotal = subtotal;
            if(this.member == false){
                this.totalprice = this.subtotal + 2500;
            }
            else{
                this.totalprice = this.subtotal;
            }
        });
    }



      clickShow(show){
        if(show.include == true){
            show.include = false;
            this.subtotal -= show.price;
        }
        else{
            show.include = true;
            this.subtotal += show.price;
        }
        if(this.member == false){
            this.totalprice = this.subtotal + 2500;
        }
        else{
            this.totalprice = this.subtotal;
        }
      }
    
    

}

        