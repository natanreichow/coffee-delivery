import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ConfirmationContainer, DetailsBox, Items } from "./styles";
import illustration from '../../assets/illustration.svg'

export function Confirmation() {
  return (
    <ConfirmationContainer>
      <div>
        <header>
          <strong>Order confirmed successfully</strong>
          <p>Your coffee is on it's way and arriving soon!</p>
        </header>

        <DetailsBox>
          <Items>
            <span><MapPin weight="fill" color="white" /></span>
            <div>
              <p>Delivery on</p>
              <strong>Geiststrasse 2, 48151 Münster</strong>
            </div>
          </Items>
          <Items>
            <span><Timer weight="fill" color="white" /></span>
            <div>
              <p>Should arrive in</p>
              <strong>20min - 30min</strong>
            </div>
          </Items>
          <Items>
            <span><CurrencyDollar weight="fill" color="white" /></span>
            <div>
              <p>Payment on delivery</p>
              <strong>Credit Card</strong>
            </div>
          </Items>
        </DetailsBox>
      </div>

      <img src={illustration} />
    </ConfirmationContainer>
  )
}