import {Routes, Route} from 'react-router-dom'
import { Layout } from './layout'
import { Checkout } from './pages/Checkout'
import { Confirmation } from './pages/Confirmation'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='Confirmation' element={<Confirmation />} />
      </Route>
    </Routes>
  )
}