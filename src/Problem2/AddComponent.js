import "bootstrap/dist/css/bootstrap.css"
const AddComponent = (props) => {
    return(
       <div className="container">
           <h1 className="text-center">Our items</h1>
           <div className="row">
               <div className="col-sm">
               <img style={{width:'350px'}} src={'https://media.istockphoto.com/id/1267819324/vector/cropped-cotton-jersey-t-shirt-technical-fashion-illustration-with-scoop-neck-short-sleeves.webp?s=612x612&w=is&k=20&c=8Fpfxt42GMLFGBIKN9kc9zIKu5Sm9nGuf0T1p1d2V8Y='}></img>
                   <h2>Cotton Shirt</h2>
                   <p>Lorem ipsum doler sit amet consecteur adipisicing elit</p>
                   <h3>Price: Rs.250 <del>Rs.300</del></h3>
                   <button onClick={props.increment}>ADD TO CART</button>
               </div>
               <div className="col-sm">
               <img style={{width:'350px'}} src={'https://media.istockphoto.com/id/1267819324/vector/cropped-cotton-jersey-t-shirt-technical-fashion-illustration-with-scoop-neck-short-sleeves.webp?s=612x612&w=is&k=20&c=8Fpfxt42GMLFGBIKN9kc9zIKu5Sm9nGuf0T1p1d2V8Y='}></img>
                    <h2>White Tshirt</h2>
                    <p>Lorem ipsum doler sit amet consecteur adipisicing elit</p>
                    <h3>Price: Rs.550 <del>Rs.600</del></h3>
                    <button onClick={props.increment}>ADD TO CART</button>
               </div>
               <div className="col-sm">
               <img style={{width:'350px'}} src={'https://media.istockphoto.com/id/1267819324/vector/cropped-cotton-jersey-t-shirt-technical-fashion-illustration-with-scoop-neck-short-sleeves.webp?s=612x612&w=is&k=20&c=8Fpfxt42GMLFGBIKN9kc9zIKu5Sm9nGuf0T1p1d2V8Y='}></img>
                    <h2>Full Sleeve Tshirt</h2>
                    <p>Lorem ipsum doler sit amet consecteur adipisicing elit</p>
                    <h3>Price: Rs.200 <del>Rs.250</del></h3>
                    <button onClick={props.increment}>ADD TO CART</button>
               </div>
           </div>
       </div> 
    )
}
export default AddComponent