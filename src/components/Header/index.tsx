import { HeaderContainer, LocationTag, Navigation } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src='logo.svg'/>
      </NavLink>
      <Navigation>
        <LocationTag>
          <MapPin size={20} weight="fill" />
          Berlin, Germany
        </LocationTag>
        <NavLink to="/Checkout" title="Checkout">
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
      </Navigation>
    </HeaderContainer>
  )
}