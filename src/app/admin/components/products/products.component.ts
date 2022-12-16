import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,private httpClientService:HttpClientService) { 
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.ballpulsesync)

    this.httpClientService.get<Product[]>({
      controller:"products"
    }).subscribe(data=>console.log(data));


    //  this.httpClientService.post({
    //    controller: "products"
    //  }, {
    //    name: "Kalem",
    //   stock: 100,
    //    price: 15
    //  }).subscribe();



    
    // this.httpClientService.put({
    //   controller:"products"
    // },{
    //   id: "97a47897-05d8-4c4b-afa2-a763ac2da5f0",
    //   name:"kağıt",
    //   stock:500,
    //   price:12
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller: "products"
    // },"36b308b1-704c-491e-b450-10699eb3c970").subscribe();



    
  }

  

}
