import { createContext, ReactNode, useState } from "react"
import { Coffee } from "../pages/Home/components/CoffeeCard"
import { produce } from "immer"

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextProps {
  cartItems: CartItem[]
  numberOfItemsInCart: number
  totalItemsPrice: number
  addCoffeeToCart: (coffee: CartItem) => void
  removeCartItem: (coffeeCartToDelete: string) => void
  changeCartItemQuantity: (coffeeCartId: string, type: 'increase' | 'decrease') => void
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({children}: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

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

  const totalItemsPrice = cartItems.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price
  }, 0)

  const numberOfItemsInCart = cartItems.length

  return (
    <CartContext.Provider value={{
      cartItems,
      addCoffeeToCart,
      numberOfItemsInCart,
      removeCartItem,
      changeCartItemQuantity,
      totalItemsPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}