import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var arr: { title: string; category:string; image: string; price: string; }[] = [
      { title: "iphone 11",category:"cover-Glass", image: "../../assets/images/iphone-11-cover.png", price: "80"},
      { title: "iphone 12",category:"cover-silicone", image: "../../assets/images/iphone-12-cover.png", price: "100"},
      { title: "iphone 13",category:"cover-silicone", image: "../../assets/images/iphone-13-cover.png", price: "120"},
      { title: "Apple Watch  44mm - Grey", category:"SE GPS", image: "../../assets/images/applewatch-1.jpg", price: "5,000"},
      { title: "Apple Watch  41mm - Blue", category:"series-7", image: "../../assets/images/applewatch-2.jpg", price: "6,000"},
      { title: "Apple Watch  45mm - Black", category:"series-7", image: "../../assets/images/applewatch-3.jpg", price: "7,200"},
      { title: "Apple AirPods-Pro Speaker", category:"AirPods", image: "../../assets/images/351SM0uv2HkL._AC_UL320_.jpg", price: "389"},
      { title: "Apple AirPods-Charging Case", category:"AirPods", image: "../../assets/images/251aY74NYttL._AC_UL320_.jpg", price: "2,761"},
      { title: "Apple AirPods (3rd Generation)",category:"AirPods", image: "../../assets/images/151viCtwM9WL._AC_UL320_.jpg", price: "4,349"},
    ];
    var accessories = document.getElementById( "accessories" );
    const bola = document.createElement( "div" );
    bola.className ='row';
    function viewMoblieArray(array: any){
      for(let i=0; i < array.length; i++){
        bola.innerHTML +=
                      `<div class="containerCard col-sm-4 mb-5" id="iphone${[i]}">
                      <div class="card card-${[i]} d-flex align-items-center pb-4">
                      <img class="card-img" src='${array[i].image}' alt="Card image" style="width: 90%; height: 300px"></img>
                      <h4 class="card-title ">${array[i].title}</h4>
                      <h4 class="card-title ">${array[i].category}</h4>
                      <h5 class="card-price"> ${array[i].price} EGP </h5>
                      <button class="buttonCard mt-2"; border-radius:10px;">Details</button>
                      </div>
                      </div>`
                    }
                  }
                  viewMoblieArray(arr);
                  accessories?.appendChild( bola );
                }
}
