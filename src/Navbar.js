import React from 'react'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { amount } = useGlobalContext()

  return (

    <nav className="navbar navbar-light bg-success py-4 px-5 sticky-top" >

      <div className='w-100 mx-auto d-flex justify-content-between align-items-center px-5' >
        <h3 className='mb-0 text-white'>Shopping Cart 🛍️</h3>
        <div className='display-block position-relative'>
          <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-cart icon-white" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>

          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-count-color">{amount} </span>
        </div>
      </div>

    </nav >

  )
}

export default Navbar