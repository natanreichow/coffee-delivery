import { Trash } from "phosphor-react";
import { useContext } from "react";
import { AddOrSubtractButton } from "../../../components/AddOrSubtractButton";
import { CartContext, CartItem } from "../../../contexts/CoffeesContext";
import { Coffee } from "../../Home/components/CoffeeCard";
import { Actions, Box, CartCoffeeContainer, Details, Infos, RemoveButton, Separator } from "./styles";

interface CartCoffeeProps {
  coffee: CartItem
}

export function CartCoffee({ coffee }: CartCoffeeProps) {
  const { removeCartItem, changeCartItemQuantity } = useContext(CartContext)
  
  function handleRemove() {
    removeCartItem(coffee.id)
  }

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    if (coffee.quantity > 1) {
      changeCartItemQuantity(coffee.id, 'decrease')
    }
  }

  const coffeePrice = (coffee.quantity * coffee.price).toFixed(2)
  
  return (
    <CartCoffeeContainer>
      <Box>
        <Infos>
          <img src={`/coffees/${coffee.photo}`} />
          <Details>
            <p>{coffee.type}</p>

            <Actions>
              <AddOrSubtractButton 
                quantity={coffee.quantity}
                onDecrease={handleDecrease}
                onIncrease={handleIncrease}
              />
              <RemoveButton type="button" onClick={handleRemove}>
                <Trash size={16} />
                REMOVE
              </RemoveButton>
            </Actions>
          </Details>
        </Infos>

        <div>
          <strong>€ {coffeePrice}</strong>
        </div>
      </Box>

      <Separator />
    </CartCoffeeContainer>
  )
}