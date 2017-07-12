import { Component } from '@angular/core'; 
import {PaginatePipe, PaginationService} from 'ng2-pagination';  

@Component({ 
   selector: 'form-app', 
   templateUrl: './app.component.html'     
}) 
export class AppComponent { 
   TutorialName: string = 'Angular JS2'; 
   appList: string[] = ["Binding", "Display", "Services"]; 
}