import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products:any=[];

  constructor(private restservice:RestService) {}

  ngOnInit(){

      this.restservice.getproduct().subscribe((data)=>{
        this.products=data;
      })
      
    }

  }


