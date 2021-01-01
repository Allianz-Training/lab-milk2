import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// api//
import { ApiService } from 'src/app/api.service';
//

@Component({
  selector: 'app-your-product',
  templateUrl: './your-product.component.html',
  styleUrls: ['./your-product.component.css']
})
export class YourProductComponent implements OnInit {
  yyy: any


  //api//
  constructor(private router: Router, private api : ApiService) { 
  //
  } 

  ngOnInit(): void {
    this.api.getApi().subscribe(xxx => {
      this.yyy = xxx["results"] ;
      console.log(this.yyy);
    })
  }




  submitcancel(): void {
    var r = confirm("Are you sure to cancel this product?");
    if (r==true) {
      this.router.navigate(['/confirmcancel']);
    }
    else {
      this.router.navigate(['/yourproduct']);
    }
  } 

}
