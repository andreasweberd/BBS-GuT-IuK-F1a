import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomizerComponent } from '../customizer/customizer.component';
import {FormControl} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {
  constructor(
    public matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  offers: Pizza[] = [];
  cart: Pizza[] = [];
  sizesArray: String[] = ["Klein", "Mittel", "Groß"];
  sizes = new FormControl();
  selectedSize: any;
  cartPrice: number = 0;

ngOnInit() {
  this.createPizzas();
}

createPizzas() {
    let PizzaSalami:  Pizza = {
      title: "Pizza Salami",
      img: "https://bestellen.dominos.de/ManagedAssets/DE/product/PSAL/DE_PSAL_all_menu_9693.png?v-334950962",
      price: 9.90,
      description: "Pizza Salami",
      ingredients: [{name: 'Teig', description: 'Teig halt', price: 2.50},
      {name: 'Tomaten', description: 'Tomaten halt', price: 1.50},
      {name: 'Zwiebeln', description: 'Zwiebeln halt', price: 3.50}] as Ingredient[]}
  let PizzaFunghi:  Pizza = {
    title: "Pizza Funghi",
    img: "https://bestellen.dominos.de/ManagedAssets/DE/product/PSAL/DE_PSAL_all_menu_9693.png?v-334950962",
    price: 10.90,
    description: "Pizza Funghi",
    ingredients: [{name: 'Teig', description: 'Teig halt', price: 2.50},
    {name: 'Tomaten', description: 'Tomaten halt', price: 1.50},
    {name: 'Zwiebeln', description: 'Zwiebeln halt', price: 3.50},
    {name: 'Salami', description: 'Salami halt', price: 3.50}] as Ingredient[]}
  let PizzaThunfisch:  Pizza = {
    title: "Pizza Thunfisch",
    img: "https://bestellen.dominos.de/ManagedAssets/DE/product/PSAL/DE_PSAL_all_menu_9693.png?v-334950962",
    price: 11,
    description: "Pizza Thunfisch",
    ingredients: [{name: 'Teig', description: 'Teig halt', price: 2.50},
    {name: 'Tomaten', description: 'Tomaten halt', price: 1.50},
    {name: 'Thunfisch', description: 'Thunfisch halt', price: 3.50}] as Ingredient[]}

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

  addToCart(pizza: Pizza) {
    this.cart.push(pizza);
    this.calculateCartPrice();
    this.openSnackBar("Artikel hinzugefügt", "Entfernen");
  }

  calculateCartPrice() {
    this.cartPrice = 0;
    this.cart.forEach(item => {
        this.cartPrice += item.price;
    });
  }

  removeItemFromCart(item: Pizza) {
    const index = this.cart.indexOf(item, 0)
    if (index > -1) {
      this.cart.splice(index, 1);
    }
    this.calculateCartPrice();
    this.openSnackBar("Artikel entfernt", "Rückgängig machen");
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, pizza: Pizza): void {
    this.matDialog.open(CustomizerComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        pizzaData: pizza
      }
    });
  }
}


export interface Pizza {
  title: string | undefined;
  img: string | undefined;
  price: number;
  description: string | undefined;
  ingredients: Ingredient[] | undefined;
}

export interface Ingredient {
  name: string | undefined;
  img: string | undefined;
  price: number;
  description: string | undefined;
}
