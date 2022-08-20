import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ConfirmationContainer, DetailsBox, Items } from "./styles";
import illustration from '../../assets/illustration.svg'
import { CartContext } from "../../contexts/CoffeesContext";
import { useContext } from "react";

export function Confirmation() {
  const { inputData } = useContext(CartContext)

  console.log(inputData)

  return (
    <ConfirmationContainer>
      <div>
        <header>
          <strong>Order confirmed successfully</strong>
          <p>Your coffee is on it's way and arriving soon!</p>
        </header>
          {inputData.map((input) => {
            return (
              <DetailsBox key={input.zipCode}>
                <Items>
                  <span><MapPin weight="fill" color="white" /></span>
                  <div>
                    <p>Delivery on</p>
                    <strong>{input.address} - {input.zipCode}, {input.city}</strong>
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
            )
          })}
      </div>
      <img src={illustration} />
    </ConfirmationContainer>
  )
}