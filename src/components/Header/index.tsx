import { HeaderContainer, LocationTag } from "./styles";
import logo from '../../assets/logo.svg'
import {MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo}/>
      <div>
        <LocationTag>
          <MapPin size={20} weight="fill" />
          Berlin, Germany
        </LocationTag>
        <NavLink to="/Checkout" title="Checkout">
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}