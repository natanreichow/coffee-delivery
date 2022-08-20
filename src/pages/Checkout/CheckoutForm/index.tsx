import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { AddressInputs, AddressSection, AddressSectionHeader, CheckoutFormContainer, PaymentMethodButtons, PaymentSection, PaymentSectionHeader } from "./styles";

export function CheckoutForm() {
  const { register } = useFormContext()

  return (
    <CheckoutFormContainer>
      <strong>Complete your order</strong>
      <AddressSection>
        <AddressSectionHeader>
          <MapPinLine size={22} color="#DBAC2C"/>
          <div>
            <span>Delivery address</span>
            <p>Inform the address where you want to receive your order</p>
          </div>
        </AddressSectionHeader>

        <AddressInputs>
          <div>
            <input placeholder="ZIP CODE" {...register('zipCode')}/>
            <input placeholder="City" {...register('city')}/>
          </div>
          <input placeholder="Address" {...register('address')}/>
          <input placeholder="Apartament number" {...register('apartamentNumber')}/>
          <input placeholder="Complement (Optional)" />
        </AddressInputs>
      </AddressSection>

      <PaymentSection>
        <PaymentSectionHeader>
          <CurrencyDollar size={22} color={'#8047F8'} />
          <div>
            <span>Payment</span>
            <p>The payment is made on delivery. Please select how do you want to pay</p>
          </div>
        </PaymentSectionHeader>

        <PaymentMethodButtons>
          <button type="button"><CreditCard color="#8047F8" size={18}/>CREDIT CARD</button>
          <button type="button"><Bank color="#8047F8" size={18}/>DEBIT CARD</button>
          <button type="button"><Money color="#8047F8" size={18}/>CASH</button>
        </PaymentMethodButtons>
      </PaymentSection>
    </CheckoutFormContainer>
  )
}