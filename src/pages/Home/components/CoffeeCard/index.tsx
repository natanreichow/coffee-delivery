import { Check, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { AddOrSubtractButton } from "../../../../components/AddOrSubtractButton";
import { CartContext } from "../../../../contexts/CoffeesContext";
import { Buy, CartButton, CoffeeCardContainer } from "./styles";

export interface Coffee {
  id: string
  photo: string
  tag: string
  type: string
  description: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffeeToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function increaseQuantity() {
    setQuantity((state) => state + 1)
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={`/coffees/${coffee.photo}`} />
      <span>{coffee.tag}</span>
      <strong>{coffee.type}</strong>
      <p>{coffee.description}</p>

      <Buy>
        <p>€ <strong>{coffee.price}</strong></p>
        <div>
          <AddOrSubtractButton 
            quantity={quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
          <CartButton type="button" onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}