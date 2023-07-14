import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ingredient, Pizza } from '../offers/offers.component';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit, OnDestroy {

  public panelOpenState = false;
  public pizzaData: Pizza = {} as Pizza;
  public ingredientData: Ingredient[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public pizza: any
  ) {}

  ngOnInit(): void {
    this.LoadPizza();
    this.LoadIngredients();
  }

  ngOnDestroy(): void {

  }

  private LoadPizza() {
    this.pizzaData = this.pizza.pizzaData;
  }

  private LoadIngredients() {
    this.ingredientData = [{name: 'Teig', description: 'Teig halt', price: 2.50},
    {name: 'Tomaten', description: 'Tomaten halt', price: 1.50},
    {name: 'Zwiebeln', description: 'Zwiebeln halt', price: 3.50},
    {name: 'Thunfisch', description: 'Thunfisch halt', price: 3.50},
    {name: 'Salami', description: 'Salami halt', price: 3.50}] as Ingredient[];
  }

  public AddIngredientToPizza(pizzaIngredient: Ingredient) {

  }

  public RemoveIngredientFromPizza(pizzaIngredient: Ingredient) {

  }
}
