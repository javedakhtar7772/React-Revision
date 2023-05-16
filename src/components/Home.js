import React from 'react'

const Home = () => {
    let name = <h1>Rajshree Pan Masala</h1>;
    let loggedIn = true;
  

    let cartItems = 30;

    const displayCardItems = () =>{
      if(cartItems > 0){
        return <h3 className='text-success' >You have {cartItems} items in your cart</h3>
      }else{
        return<h4 className='text-danger'>Your cart is Empty!!</h4>
      }


}
  return (
    <div>
        <h1>React is Awesome</h1>
        {name}

        {
          loggedIn ? (<button className ='btn btn-danger'>Logout</button>)
          :
          (<button className='btn btn-primary'>login</button>)
        }
        {displayCardItems()}
    </div>
  )
}

export default Home