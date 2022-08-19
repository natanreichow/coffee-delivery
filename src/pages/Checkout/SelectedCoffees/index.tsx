import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../contexts/CoffeesContext";
import { CartCoffee } from "../CartCoffees";
import { CheckoutBox, Item, PriceSum, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems, totalItemsPrice } = useContext(CartContext)

  const totalItems = totalItemsPrice.toFixed(2)
  const deliveryFee = (cartItems.length > 0) ? 1.99 : 0
  const total = (deliveryFee + totalItemsPrice).toFixed(2)

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
            <NavLink to="/Confirmation" title="Confirmation">
              <button type="submit">CONFIRM ORDER</button>
            </NavLink>
          </PriceSum>
        </CheckoutBox>
    </SelectedCoffeesContainer>
  )
}