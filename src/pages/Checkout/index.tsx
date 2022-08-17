import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { CoffeeCardCheckout } from "../../components/CoffeeCardCheckout";
import { AddressForm, AddressInputs, CheckoutBox, CheckoutContainer, CheckoutSection, Item, OrderInfo, Payment, PaymentMethodButtons, PriceSum } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <OrderInfo>
          <strong>Complete your order</strong>
          <AddressForm>
            <header>
              <MapPinLine size={22} color="#DBAC2C"/>
              <div>
                <span>Delivery address</span>
                <p>Inform the address where you want to receive your order</p>
              </div>
            </header>

            <AddressInputs>
              <div>
                <input placeholder="ZIP CODE" required/>
                <input placeholder="City" required/>
              </div>
              <input placeholder="Address" required/>
              <input placeholder="Number" required/>
              <input placeholder="Complement (Optional)" />
            </AddressInputs>
          </AddressForm>

          <Payment>
            <header>
              <CurrencyDollar size={22} color={'#8047F8'} />
              <div>
                <span>Payment</span>
                <p>The payment is made on delivery. Please select how do you want to pay</p>
              </div>
            </header>

            <PaymentMethodButtons>
              <button type="button"><CreditCard color="#8047F8" size={18}/>CREDIT CARD</button>
              <button type="button"><Bank color="#8047F8" size={18}/>DEBIT CARD</button>
              <button type="button"><Money color="#8047F8" size={18}/>CASH</button>
            </PaymentMethodButtons>
          </Payment>
        </OrderInfo>

        <CheckoutSection>
          <strong>Selected Coffees</strong>
          <CheckoutBox>

            {/* Filter and display only Coffees that have the attribute "isSelected" = true */}
            {/* Need access to useState Coffees in Home page */}
            <CoffeeCardCheckout />

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
        </CheckoutSection>
      </form>
    </CheckoutContainer>
  )
}