import { Component } from '@angular/core'; 
import {PaginatePipe, PaginationService} from 'ng2-pagination';  

@Component({ 
   selector: 'form-app', 
   templateUrl: './app.component.html'     
}) 
export class AppComponent { 
   newdate = new Date(2016, 3, 15);; 
   newValue: number = 123;
   newValue1: number = 30;   
   newValue2: number = 0.3;    
}