import { createContext, ReactNode, useState } from "react"

export interface Coffees {
  photo: string
  tag: string
  type: string
  description: string
  price: number
  isSelected: boolean
  id: string
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

interface CoffeesContextProps {
  coffees: Coffees[]
  handleIsSelected: (id: string) => void
}

export const CoffeesContext = createContext({} as CoffeesContextProps)

// export function CoffeesContextProvider({children}: CoffeesContextProviderProps) {
//   const [coffees, setCoffees] = useState([''])

//   function handleIsSelected(id: string) {
//     const selectedCoffee = coffees.map(coffee => {
//       if (coffee.id === id) {
//         return {
//           ...coffee,
//           isSelected: true
//         }
//       }
//       return coffee
//     })
//     setCoffees(selectedCoffee)
//   }

//   return (
//     <CoffeesContext.Provider>
//       {children}
//     </CoffeesContext.Provider>
//   )
// }