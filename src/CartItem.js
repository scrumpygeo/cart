import React from 'react'
import { useGlobalContext } from './context'

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem } = useGlobalContext()
  return (

    <div className="card flex-row col-md-6 col-sm-10 col-xs-12 offset-md-3 mb-4">
      <img
        src={img}
        className="w-25"
        alt={title}
      />
      <div className="card-body d-flex justify-content-between ms-4">
        <div className="card-text">
          <h6>{title}</h6>
          <p>£{price}</p>
          <button className='border-0 bg-transparent text-warning' onClick={() => removeItem(id)}>Remove</button>
        </div>
        <div className="buttons h-100 d-flex flex-column justify-content-between">
          <button className="border-0 bg-transparent fs-5 font-weight-bold  text-success">&#8963;</button>
          <p className="align-self-center ">{amount}</p>
          <button className="border-0 bg-transparent fs-5 font-weight-bold text-success" >&#709;</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem