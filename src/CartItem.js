import React from 'react'
import { useGlobalContext } from './context'

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4>£{price}</h4>
      </div>
      <div>
        <h4>{amount}</h4>
      </div>
    </article>
  )
}

export default CartItem