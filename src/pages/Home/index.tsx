import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { InfosContainer, Catalog, InfosText, InfosItems, CoffeeList } from "./styles";
import homeCoffeeImage from "../../assets/homeCoffeeImage.svg"
import { CoffeeCard } from "../../components/CoffeeCard";
import { v4 as uuidv4 } from 'uuid';

import expresso from '../../assets/expresso.svg'
import americano from '../../assets/americano.svg'
import coffeemilk from '../../assets/coffeemilk.svg'
import latte from '../../assets/latte.svg'
import capuccino from '../../assets/capuccino.svg'
import macchiato from '../../assets/macchiato.svg'
import mocaccino from '../../assets/mocaccino.svg'
import chocolate from '../../assets/chocolate.svg'
import cubano from '../../assets/cubano.svg'
import havaiano from '../../assets/havaiano.svg'
import arabish from '../../assets/arabish.svg'
import irish from '../../assets/irish.svg'
import { useState } from "react";

export interface HomeProps {
  photo: string
  tag: string
  type: string
  description: string
  price: number
  isSelected: boolean
  id: string
}

export function Home() {
  const [coffees, setCoffees] = useState([
    {
      id: uuidv4(),
      photo: expresso,
      tag: 'TRADICIONAL',
      type: 'Expresso Tradicional',
      description: 'The traditional Expresso with fresh ground grains',
      price: 2.49,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: americano,
      tag: 'TRADICIONAL',
      type: 'Americano',
      description: 'Not as strong as the tradicional expresso',
      price: 2.49,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: coffeemilk,
      tag: 'WITH MILK',
      type: 'Coffee with Milk',
      description: 'Expresso tradicional with vaporized milk',
      price: 2.49,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: latte,
      tag: 'WITH MILK',
      type: 'Latte',
      description: 'A shot of espresso with double the milk and creamy foam',
      price: 2.49,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: capuccino,
      tag: 'WITH MILK',
      type: 'Capuccino',
      description: 'Cinnamon drink made from equal parts coffee, milk and foam',
      price: 2.49,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: macchiato,
      tag: 'WITH MILK',
      type: 'Macchiato',
      description: 'Espresso mixed with some hot milk and froth',
      price: 2.49,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: mocaccino,
      tag: 'WITH MILK',
      type: 'Mocaccino',
      description: 'The traditional Expresso with fresh ground grains',
      price: 2.49,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: chocolate,
      tag: 'SPECIAL',
      type: 'Hot Chocolate',
      description: 'The traditional Expresso with fresh ground grains',
      price: 2.99,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: cubano,
      tag: 'ALCOHOLIC',
      type: 'Cubano',
      description: 'The traditional Expresso with fresh ground grains',
      price: 3.49,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: havaiano,
      tag: 'SPECIAL',
      type: 'Havaiano',
      description: 'The traditional Expresso with fresh ground grains',
      price: 2.99,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: arabish,
      tag: 'SPECIAL',
      type: 'Arabish',
      description: 'The traditional Expresso with fresh ground grains',
      price: 2.99,
      isSelected: false
    },
    {
      id: uuidv4(),
      photo: irish,
      tag: 'ALCOHOLIC',
      type: 'Irish',
      description: 'The traditional Expresso with fresh ground grains',
      price: 3.49,
      isSelected: false
    },
  ])

  function handleIsSelected(id: string) {
    const selectedCoffee = coffees.map(coffee => {
      if (coffee.id === id) {
        return {
          ...coffee,
          isSelected: !coffee.isSelected
        }
      }
      return coffee
    })
    setCoffees(selectedCoffee)
  }

  return (
    <>
      <InfosContainer>
        <InfosText>
          <h1>Find the perfect coffee for any time of the day</h1>
          <strong>With coffe delivery you receive your coffee anywhere, at any time</strong>

          <InfosItems>
            <p>
              <span><ShoppingCart size={16} weight="fill"/></span>
              Safe and simple purchase
            </p>
            <p>
              <span><Timer size={16} weight="fill"/></span>
              Fast and tracked delivery
            </p>
            <p>
              <span><Package size={16} weight="fill"/></span>
              The package keeps the coffee intact
            </p>
            <p>
              <span><Coffee size={16} weight="fill"/></span>
              The coffe arrives fresh to you
            </p>
          </InfosItems>
        </InfosText>
        <img src={homeCoffeeImage} />
      </InfosContainer>

      <Catalog>
        <h2>Our coffees</h2>
        <CoffeeList>
          {coffees.map(coffee => {
            return (
              <CoffeeCard 
                key={coffee.id}
                id={coffee.id}
                photo={coffee.photo}
                tag={coffee.tag}
                type={coffee.type}
                description={coffee.description}
                price={coffee.price}
                isSelected={coffee.isSelected}
                onHandleIsSelected={handleIsSelected}
              />
            )
          })}
        </CoffeeList>
      </Catalog>
    </>
  )
}