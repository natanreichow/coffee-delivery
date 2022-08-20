import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../contexts/CoffeesContext";
import { CartCoffee } from "../CartCoffees";
import { CheckoutBox, Item, PriceSum, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems, totalItemsPrice, numberOfItemsInCart } = useContext(CartContext)

  const totalItems = totalItemsPrice.toFixed(2)
  const deliveryFee = (cartItems.length > 0) ? 1.99 : 0
  const total = (deliveryFee + totalItemsPrice).toFixed(2)

  const noItemsInCart = numberOfItemsInCart === 0

  return (
    <SelectedCoffeesContainer>
      <strong>Selected Coffees</strong>
        <CheckoutBox>
          {cartItems.map((item) => (
            <CartCoffee key={item.id} coffee={item} />
          ))}
          <PriceSum>
            <Item>
              <p>Total items</p>
              <p>€ {totalItems}</p>
            </Item>
            <Item>
              <p>Delivery fee</p>
              <p>€ {deliveryFee}</p>
            </Item>
            <Item>
              <strong>Total</strong>
              <strong>€ {total}</strong>
            </Item>
              <button type="submit" disabled={noItemsInCart}>CONFIRM ORDER</button>
          </PriceSum>
        </CheckoutBox>
    </SelectedCoffeesContainer>
  )
}