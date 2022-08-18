import { Check, ShoppingCart } from "phosphor-react";
import { AddOrSubtractButton } from "../../../../components/AddOrSubtractButton";
import { Buy, CartButton, CoffeeCardContainer } from "./styles";

export interface Coffee {
  id: string
  photo: string
  tag: string
  type: string
  description: string
  price: number
  isSelected: boolean
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={`/coffees/${coffee.photo}`} />
      <span>{coffee.tag}</span>
      <strong>{coffee.type}</strong>
      <p>{coffee.description}</p>

      <Buy>
        <p>€ <strong>{coffee.price}</strong></p>
        <div>
          <AddOrSubtractButton />
          <CartButton type="button">
            {coffee.isSelected === true 
              ? <Check size={22} weight="bold"/>
              : <ShoppingCart weight="fill" size={22} />
            }
          </CartButton>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}