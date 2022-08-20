import { CheckoutForm } from "./CheckoutForm";
import { SelectedCoffees } from "./SelectedCoffees";
import { CheckoutContainer } from "./styles";
import { FormProvider, useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { CartContext, CartItem } from "../../contexts/CoffeesContext";
import { useNavigate } from "react-router-dom"

const newInputsFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Inform the zip Code'),
  city: zod.string().min(1, 'Inform the city'),
  address: zod.string().min(1, 'Inform the address'),
  apartamentNumber: zod.string().min(1, 'Inform the apartament number'),
  payment: zod.string()
})

type NewInputsFormData = zod.infer<typeof newInputsFormValidationSchema>

export function Checkout() {
  const { createNewInputs, removeAllItemsFromCart } = useContext(CartContext)

  const newInputsForm = useForm<NewInputsFormData>({
    resolver: zodResolver(newInputsFormValidationSchema),
    defaultValues: {
      zipCode: '',
      city: '',
      address: '',
      apartamentNumber: '',
      payment: undefined
    },
  })

  const { handleSubmit, reset } = newInputsForm

  const navigate = useNavigate()

  function handleCreateNewInputs(data: NewInputsFormData) {
    navigate('/Confirmation')
    createNewInputs(data)
    removeAllItemsFromCart()
    reset()
  }

  return (    
    <CheckoutContainer>
      <FormProvider {...newInputsForm}>
        <form onSubmit={handleSubmit(handleCreateNewInputs)} action="">
          <CheckoutForm />
          <SelectedCoffees />
        </form>
      </FormProvider>
    </CheckoutContainer>
  )
}