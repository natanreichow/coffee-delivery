import { Actions, Container, Details, Infos, RemoveButton, Separator } from "./styles";
import expresso from '../../assets/expresso.svg'
import { AddOrSubtractButton } from "../AddOrSubtractButton";
import { Trash } from "phosphor-react";

export function CoffeeCardCheckout() {
  return (
    <div>
      <Container>
        <Infos>
          <img src={expresso} />
          <Details>
            <p>Expresso Tradicional</p>

            <Actions>
              <AddOrSubtractButton />
              <RemoveButton type="button">
                <Trash color="#8047F8"/>
                REMOVE
              </RemoveButton>
            </Actions>
          </Details>
        </Infos>

        <div>
          <strong>€</strong>
          <strong>14,70</strong>
        </div>
      </Container>

      <Separator />
    </div>
  )
}