import { Iproduct } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:any=[];
  constructor(private productservice:ProductService,private router:Router){
  }
  ngOnInit(): void {
    this.products=this.productservice.getAllproducts().subscribe({
      next:(response)=>{
this.products=response;
console.log(this.products);
      },
      error:(error)=>{
        console.log(error);
      },
    });

  }
  deleteProduct(productId:number){
    this.productservice.deletproduct(productId).subscribe({
      next: (response)=>{
    this.products= this.products.filter((product:any) => product.id !=productId)
      },
    });
  }
}
