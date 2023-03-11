import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId:number=0;
  product:any;
  constructor(private activeroute:ActivatedRoute,private productservice:ProductService,private router:Router){
   this.activeroute.paramMap.subscribe((params) =>{
    this.productId= Number(params.get('id'));
    // this.productForm.controls['productName'].setValue('');
    // this.productForm.controls['productPrice'].setValue(0);
    // this.productForm.controls['productquantity'].setValue(0);
    // this.productForm.controls['productImg'].setValue('');
   });


  }
  ngOnInit(): void {
    if(this.productId !=0){
      this.productservice.getproductById(this.productId).subscribe({
        next:(response)=>{

          this.product=response;
          console.log(this.product);

          this.productForm.controls['productName'].setValue(this.product.productName);
          this.productForm.controls['price'].setValue(this.product.price)
          this.productForm.controls['quantity'].setValue(this.product.quantity)
          this.productForm.controls['imgurl'].setValue(this.product.imgurl)
        },
      });
    }

  }

productForm=new FormGroup({
productName:new FormControl('',[Validators.required]),
price:new FormControl(0,[Validators.required,Validators.min(15)]),
quantity:new FormControl(0,Validators.required),
imgurl:new FormControl('',Validators.required),

});
get getProductName() {
  return this.productForm.controls['productName'];
}
get getProductprice() {
  return this.productForm.controls['price'];
}
get getProductquantity() {
  return this.productForm.controls['quantity'];
}
get getProductImg() {
  return this.productForm.controls['imgurl'];
}

submitForm(e:any){
   e.preventDefault();
  if(this.productForm.status =='VALID'){
   if(this.productId==0){
    this.productservice.addproduct(this.productForm.value).subscribe({
      next:(response)=>{
        console.log(response);
      }
    })

   }else{
    this.productservice.editproduct(this.productId,this.productForm.value).subscribe({
      next:(response)=>{
        console.log(response);

      },

    });
   }
   this.router.navigate(['/products']);



  }

}

}
