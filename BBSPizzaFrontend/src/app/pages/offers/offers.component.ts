import { Component } from '@angular/core';
import {MDCRipple} from '@material/ripple';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {
  offers: Pizza[] = [];
  sizesArray: String[] = ["Klein", "Mittel", "Groß"];
  sizes = new FormControl();
  selectedSize: any;

  constructor() {
  }

ngOnInit() {
  this.createPizzas();
}

createPizzas() {
    let PizzaSalami:  Pizza = {
      title: "Pizza Salami",
      img: "https://bestellen.dominos.de/ManagedAssets/DE/product/PSAL/DE_PSAL_all_menu_9693.png?v-334950962",
      price: 9.90,
      description: "Pizza Salami",
      ingredients: ["Teig", "Mozzarella", "Salami"]};
  let PizzaFunghi:  Pizza = {
    title: "Pizza Funghi",
    img: "https://bestellen.dominos.de/ManagedAssets/DE/product/PSAL/DE_PSAL_all_menu_9693.png?v-334950962",
    price: 10.90,
    description: "Pizza Funghi",
    ingredients: ["Teig", "Pilze", "Mozzarella", "Salami"]};
  let PizzaThunfisch:  Pizza = {
    title: "Pizza Thunfisch",
    img: "https://bestellen.dominos.de/ManagedAssets/DE/product/PSAL/DE_PSAL_all_menu_9693.png?v-334950962",
    price: 11,
    description: "Pizza Thunfisch",
    ingredients: ["Teig", "Mozzarella", "Thunfisch"]};

  this.offers.push(PizzaSalami);
  this.offers.push(PizzaFunghi);
  this.offers.push(PizzaThunfisch);
  this.offers.push(PizzaSalami);
  this.offers.push(PizzaFunghi);
  this.offers.push(PizzaThunfisch);
  this.offers.push(PizzaSalami);
  this.offers.push(PizzaFunghi);
  this.offers.push(PizzaThunfisch);
}
}


export interface Pizza {
  title: string | undefined;
  img: string | undefined;
  price: number | undefined;
  description: string | undefined;
  ingredients: string[] | undefined;
}
