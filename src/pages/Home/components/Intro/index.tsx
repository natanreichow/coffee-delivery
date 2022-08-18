import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { InfosContainer, InfosItems, InfosText } from "./styles";
import homeCoffeeImage from '../../../../assets/homeCoffeeImage.svg'

export function Intro() {
  return (
    <InfosContainer>
      <InfosText>
        <h1>Find the perfect coffee for any time of the day</h1>
        <strong>With coffe delivery you receive your coffee anywhere, at any time</strong>

        <InfosItems>
          <p>
            <span><ShoppingCart size={16} weight="fill"/></span>
            Safe and simple purchase
          </p>
          <p>
            <span><Timer size={16} weight="fill"/></span>
            Fast and tracked delivery
          </p>
          <p>
            <span><Package size={16} weight="fill"/></span>
            The package keeps the coffee intact
          </p>
          <p>
            <span><Coffee size={16} weight="fill"/></span>
            The coffe arrives fresh to you
          </p>
        </InfosItems>
      </InfosText>
      <img src={homeCoffeeImage} />
    </InfosContainer>
  )
}