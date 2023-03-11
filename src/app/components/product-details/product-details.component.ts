import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   productId:number=0;
   product:any =null;

  constructor(private activatedRoute:ActivatedRoute,private productservice:ProductService,private router:Router){
 this.productId=Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.productservice.getproductById(this.productId).subscribe({
      next: (response)=>(this.product=response)
    });







  }

}
