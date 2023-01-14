import React from 'react'

const Navbar = () => {
  return (

    <nav class="navbar navbar-light bg-success py-4 px-5" >

      <div className='w-100 mx-auto d-flex justify-content-between align-items-center px-5' >
        <h3 className='mb-0 text-white'>Shopping Cart 🛍️</h3>
        <div className='display-block position-relative'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='icon-white'>
            <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg>

          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-count-color">8 <span class="visually-hidden">unread messages</span></span>
        </div>
      </div>
    </nav >

  )
}

export default Navbar