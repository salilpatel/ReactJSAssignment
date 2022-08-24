import React from 'react';
import "bootstrap/dist/css/bootstrap.css"

const Cart = ({ cart, setCart, setCartLength }) => {
  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    setCartLength(cart.length - 1);
  }

  return (
    <article>
      <h2 className="text-center">You have Ordered:</h2>
      {cart.map((item) => (
        <div key={item.id} className='row'>
          <div className='col-sm-2'>
            <img style={{ width: '150px' }} src={item.img} alt={''} />
          </div>
          <div className='col-sm-8'>
            <h3>{item.shirtType}</h3>
            <p>{item.description}</p>
            <h4>{item.actualPrice} <del>{item.fakePrice}</del></h4>
          </div>
          <div className='col-sm-2' style={{ marginTop: '40px' }}>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </article>
  )
}

export default Cart;
