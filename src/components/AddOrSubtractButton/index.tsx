import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Container, NumberOfCoffee  } from "./styles";

export function AddOrSubtractButton() {
  const [count, setCount] = useState(1)

  function increaseCount() {
    setCount((count) => count + 1)
  }

  function decreaseCount() {
    if (count > 1) {
      setCount((count) => count -1 )
    }
  }

  return (
    <Container>
      <button type="button" onClick={decreaseCount}>
        <Minus size={14} weight="bold" color="#8047F8"/>
      </button>

      <NumberOfCoffee>{count}</NumberOfCoffee>

      <button type="button" onClick={increaseCount}>
        <Plus size={14} weight="bold" color="#8047F8"/>
      </button>

    </Container>
  )
}