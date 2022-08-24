import React from "react";
import products from "./Product";
import "bootstrap/dist/css/bootstrap.css"

const Home = ({ handleClick }) => {

  return (
    <div className="container">
      <h1 className="text-center">Our items</h1>
      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-sm">
            <div>
              <img style={{ width: '350px' }} src={item.img} />
            </div>
            <div style={{ paddingLeft: '30px' }}>
              <h2>{item.shirtType}</h2>
              <p>{item.description}</p>
              <h3>{item.actualPrice} <del>{item.fakePrice}</del></h3>
              <button onClick={() => handleClick(item)}>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Home;