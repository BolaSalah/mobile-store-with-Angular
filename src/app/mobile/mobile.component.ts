import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: [ './mobile.component.css' ]
} )

export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var arr: { title: string; image: string; price: number; }[] = [
      { title: "iphone 13", image: "../../assets/images/iphone 13.png", price: 26000, },
      { title: "iphone 13 Pro", image: "../../assets/images/iphone 13 pro.png", price: 28000, },
      { title: "iphone 13 Pro Max", image: "../../assets/images/iphone 13 pro max.png", price: 30000, },
      { title: "iphone 12", image: "../../assets/images/iphone 12.png", price: 14000, },
      { title: "iphone 12 Pro", image: "../../assets/images/iphone 12 pro.png", price: 16000, },
      { title: "iphone 12 Pro Max", image: "../../assets/images/iPhone 12 pro Max.png", price: 18000, },
      { title: "iphone 11", image: "../../assets/images/iphone 11.png", price: 11000, },
      { title: "iphone 11 Pro", image: "../../assets/images/iPhone 11 pro.png", price: 13000, },
      { title: "iphone 11 Pro Max", image: "../../assets/images/iphone 11 pro max.png", price: 15000, },
    ];
    var MobileItems = document.getElementById( "MobileStore" );
    const bola = document.createElement( "div" );
    bola.className ='row';
    function viewMoblieArray(array: any){
      for(let i=0; i < array.length; i++){
        bola.innerHTML +=
                      `<div class="containerCard col-sm-4 mb-5" id="iphone${[i]}">
                      <div class="card card-${[i]} d-flex align-items-center pb-4">
                      <img class="card-img" src='${array[i].image}' alt="Card image" style="width: 90%; height: 300px"></img>
                      <h4 class="card-title ">${array[i].title}</h4>
                      <h5 class="card-price"> <del> ${array[i].price} EGP </del> </h5>
                      <h5 class="card-price">${array[i].price-500} EGP</h5>
                      <button class="buttonCard mt-2"; border-radius:10px;">Details</button>
                      </div>
                      </div>`
                    }
                  }
                  viewMoblieArray(arr);
                  MobileItems?.appendChild( bola );
                }
  }
