import { Buy, CoffeeCardContainer } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { AddOrSubtractButton } from "../AddOrSubtractButton";

interface CoffeesProps {
  photo: string
  tag: string
  type: string
  description: string
  price: number
}

export function CoffeeCard({ photo, tag, type, description, price}: CoffeesProps) {
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
          <button type="submit">
            <ShoppingCart weight="fill" size={22} />
          </button>
        </form>
      </Buy>
    </CoffeeCardContainer>
  )
}