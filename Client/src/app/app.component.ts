import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@microsoft/signalr';
import { IPagination } from './models/pagination';
import { IProduct } from './models/product';
import { from, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Einstein';
  products:IProduct[]
  constructor(private http:HttpClientModule){}


  ngOnInit(): any {
  }
}
