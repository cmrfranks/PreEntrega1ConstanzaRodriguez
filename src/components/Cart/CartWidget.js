import React from 'react';

const Cart = ({total}) => {
  return (
    <>
      <div className='carrito'>
        🛒
      </div>
      <span className='totalProd'>{total}</span>
    </>
  )
}

export default Cart;