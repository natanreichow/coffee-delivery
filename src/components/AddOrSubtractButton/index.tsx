import { Minus, Plus } from "phosphor-react";
import { Container, MinusButton, PlusButton } from "./styles";

export function AddOrSubtractButton() {
  return (
    <Container>
      <MinusButton type="button">
        <Minus size={14} weight="bold" color="#8047F8"/>
      </MinusButton>

      <input type="number" placeholder="1"/>

      <PlusButton type="button">
        <Plus size={14} weight="bold" color="#8047F8"/>
      </PlusButton>
    </Container>
  )
}