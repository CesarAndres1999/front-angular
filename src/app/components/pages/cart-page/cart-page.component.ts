import { Component } from '@angular/core';
import { CartService } from '../../../service/cart.service';
import { Cart } from '../../../share/models/Carts';
import { CartItem } from '../../../share/models/CartItem';
import { TitleComponent } from "../../partials/title/title.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-cart-page',
  imports: [TitleComponent, CommonModule, RouterModule, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
cart!:Cart;
constructor(private cartService:CartService){
  this.cartService.getCartObservable().subscribe((cart)=>{
    this.cart=cart;
  })
}

removeFromCart(cartItem:CartItem){
  this.cartService.removeFormCart(cartItem.food.id);

}
changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id,quantity)
}


}
