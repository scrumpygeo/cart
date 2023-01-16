import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart } = useGlobalContext()

  if (cart.length === 0) {
    return (
      <section>
        <header className='text-center mb-5'>
          <h2>Your Cart</h2>
          <h4>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section  >
      <header className="text-center mb-5">
        <h2>Your Cart Contents</h2>

      </header >
      <div>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CartContainer