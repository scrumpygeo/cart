import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart, clearCart } = useGlobalContext()

  if (cart.length === 0) {
    return (
      <section>
        <header className='text-center my-5'>
          <h2>Your Cart</h2>
          <h4>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section   >
      <header className="text-center mt-2 mb-5">
        <h2>Your Cart Contents</h2>

      </header >
      <div>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>

      <hr className='col-md-6 col-sm-10 col-xs-12 offset-md-3' />
      <footer className="card flex-col col-md-6 col-sm-10 col-xs-12 offset-md-3 mb-4 border-0">

        {/* cart totals */}
        <div className='d-flex justify-content-between'>
          <h4>Total: </h4>
          <h4 className='pe-4'>£6000</h4>
        </div>

        <div className='mx-auto'>
          <button className="btn btn btn-outline-danger" onClick={clearCart}>Clear Cart</button>
        </div>
      </footer>
    </section>
  )
}

export default CartContainer