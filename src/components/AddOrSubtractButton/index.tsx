import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { Container, NumberOfCoffee  } from "./styles";

interface ButtonProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function AddOrSubtractButton({ quantity, onIncrease, onDecrease }: ButtonProps) {
  return (
    <Container>
      <button type="button" onClick={onDecrease}>
        <Minus size={14} weight="bold" color="#8047F8"/>
      </button>

      <NumberOfCoffee>{quantity}</NumberOfCoffee>

      <button type="button" onClick={onIncrease}>
        <Plus size={14} weight="bold" color="#8047F8"/>
      </button>

    </Container>
  )
}