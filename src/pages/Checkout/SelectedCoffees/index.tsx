import { NavLink } from "react-router-dom";
import { coffees } from "../../../data";
import { CartCoffee } from "../CartCoffees";
import { CheckoutBox, Item, PriceSum, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <strong>Selected Coffees</strong>
        <CheckoutBox>
          {coffees.map((coffee) => {
            if (coffee.isSelected === true) {
              return (
                <CartCoffee key={coffee.id} coffee={coffee}/>
              )
            }
          })}

          <PriceSum>
            <Item>
              <p>Total items</p>
              <div>
                <p>€</p>
                <p>0,00</p>
              </div>
            </Item>
            <Item>
              <p>Delivery fee</p>
              <div>
                <p>€</p>
                <p>0,00</p>
              </div>
            </Item>
            <Item>
              <strong>Total</strong>
              <div>
                <strong>€</strong>
                <strong>0,00</strong>
              </div>
            </Item>
            <NavLink to="/Confirmation" title="Confirmation">
              <button type="submit">CONFIRM ORDER</button>
            </NavLink>
          </PriceSum>
        </CheckoutBox>
    </SelectedCoffeesContainer>
  )
}