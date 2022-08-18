import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";
import { coffees } from "../../../../data"

export function OurCoffees() {
  return (
    <OurCoffeesContainer>
      <h2>Our coffees</h2>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}/>
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}