import {AppComponent} from './app.component';
import {AccDataComponent} from './acc-data.component';
import {AccDataService} from './acc-data.service';
import {OppDataComponent} from './opp-data.component';
import {OppDataService} from './opp-data.service';
import {PrdDataComponent} from './prd-data.component';
import {PrdDataService} from './prd-data.service';
import {NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [AppComponent,  AccDataComponent, OppDataComponent, PrdDataComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    bootstrap: [AppComponent],
    providers: [AccDataService, OppDataService, PrdDataService]
})

class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
