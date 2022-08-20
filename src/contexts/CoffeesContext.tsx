import { createContext, ReactNode, useState } from "react"
import { Coffee } from "../pages/Home/components/CoffeeCard"
import { produce } from "immer"

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextProviderProps {
  children: ReactNode
}

interface CreateInputData {
  zipCode: string
  city: string
  address: string
  apartamentNumber: string
  payment: string
}

interface CartContextProps {
  cartItems: CartItem[]
  inputData: CreateInputData[]
  numberOfItemsInCart: number
  totalItemsPrice: number
  addCoffeeToCart: (coffee: CartItem) => void
  removeCartItem: (coffeeCartToDelete: string) => void
  changeCartItemQuantity: (coffeeCartId: string, type: 'increase' | 'decrease') => void
  createNewInputs: (data: CreateInputData) => void
  removeAllItemsFromCart: () => void
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({children}: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const [inputData, setInputData] = useState<CreateInputData[]>([])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExists = cartItems.findIndex((item) => item.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExists < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExists].quantity += coffee.quantity
      }
    })
    setCartItems(newCart)
  }

  function removeCartItem(coffeeCartToDeleteId: string) {
    const cartWithoutDeletedOne = cartItems.filter(item => {
      return item.id !== coffeeCartToDeleteId
    })

    setCartItems(cartWithoutDeletedOne)
  }

  function removeAllItemsFromCart() {
    setCartItems([])
  }

  function changeCartItemQuantity(coffeeCartId: string, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const coffeeAlreadyExists = cartItems.findIndex((item) => item.id === coffeeCartId)
      
      if (coffeeAlreadyExists >= 0) {
        const item = draft[coffeeAlreadyExists]
        item.quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function createNewInputs(data: CreateInputData) {
    const newData = {
      zipCode: data.zipCode,
      city: data.city,
      apartamentNumber: data.apartamentNumber,
      address: data.address,
      payment: data.payment
    }
    setInputData([newData])
  }

  const totalItemsPrice = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price
  }, 0)

  let numberOfItemsInCart = cartItems.length

  return (
    <CartContext.Provider value={{
      cartItems,
      inputData,
      addCoffeeToCart,
      numberOfItemsInCart,
      removeCartItem,
      changeCartItemQuantity,
      totalItemsPrice,
      createNewInputs,
      removeAllItemsFromCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}