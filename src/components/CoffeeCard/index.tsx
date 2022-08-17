import { Buy, CartButton, CoffeeCardContainer } from "./styles";
import { Check, ShoppingCart } from "phosphor-react";
import { AddOrSubtractButton } from "../AddOrSubtractButton";
import { FormEvent, useState } from "react";
import { HomeProps } from "../../pages/Home";

interface CoffeesProps extends HomeProps{
  onHandleIsSelected: (id: string) => void
}

export function CoffeeCard({
  photo,
  tag,
  type,
  description,
  price,
  onHandleIsSelected,
  id,
  isSelected
  }: CoffeesProps) {

  function changeIsSelected() {
    onHandleIsSelected(id)
  }

  return (
    <CoffeeCardContainer>
      <img src={photo} />
      <span>{tag}</span>
      <strong>{type}</strong>
      <p>{description}</p>

      <Buy>
        <p>€ <strong>{price}</strong></p>
        <form>
          <AddOrSubtractButton />
          <CartButton type="button" onClick={changeIsSelected}>
            {isSelected === true 
              ? <Check size={22} weight="bold"/>
              : <ShoppingCart weight="fill" size={22} />
            }
          </CartButton>
        </form>
      </Buy>
    </CoffeeCardContainer>
  )
}