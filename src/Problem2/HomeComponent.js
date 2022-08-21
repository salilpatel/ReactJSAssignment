/* HomeComponent */
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import AddContainer from "./AddContainer"
import RemoveContainer from "./RemoveContainer";
import "bootstrap/dist/css/bootstrap.css";

const CartComponent = (props) => {
    console.log(props)
    return(
        <>
        <BrowserRouter>
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <nav className="navbar navbar-dark bg-dark">
                        <h1><Link to="/">Shopping Cart</Link></h1>
                        <h1 style={{textAlign:'right'}}><Link to="/cart">Cart {props.count}</Link></h1>
                  </nav>
              </div>
            </div>
        </div>
        <Routes>
            <Route index path="/" element={<AddContainer/>}></Route>
            <Route path="cart" element={<RemoveContainer/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default CartComponent
