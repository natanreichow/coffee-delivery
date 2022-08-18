import { Trash } from "phosphor-react";
import { AddOrSubtractButton } from "../../../components/AddOrSubtractButton";
import { Actions, Box, CartCoffeeContainer, Details, Infos, RemoveButton, Separator } from "./styles";

interface Coffee {
  id: string
  photo: string
  type: string
  price: number
}

interface CartCoffeeProps {
  coffee: Coffee
}

export function CartCoffee({ coffee }: CartCoffeeProps) {
  return (
    <CartCoffeeContainer>
      <Box>
        <Infos>
          <img src={`/coffees/${coffee.photo}`} />
          <Details>
            <p>{coffee.type}</p>

            <Actions>
              <AddOrSubtractButton />
              <RemoveButton type="button">
                <Trash size={16} />
                REMOVE
              </RemoveButton>
            </Actions>
          </Details>
        </Infos>

        <div>
          <strong>€</strong>
          <strong>{coffee.price}</strong>
        </div>
      </Box>

      <Separator />
    </CartCoffeeContainer>
  )
}