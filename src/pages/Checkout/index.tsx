import { CheckoutForm } from "./CheckoutForm";
import { SelectedCoffees } from "./SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (    
    <CheckoutContainer>
      <CheckoutForm />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}