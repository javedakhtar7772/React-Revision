import React from 'react'
import laptopList from './laptopData'

const ListingPage = () => {

    const displayLaptopData = () =>{
        return laptopList.map( (laptop) => { 
            return (
                <div className='card mt-4' key = {laptop.id}>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-4'>
                                <img className='img-fluid' src ={laptop.image} alt=''/>
                            </div>
                            <div className='col-8'>
                                <h4>{laptop.name}</h4>
                                <h2>₹{laptop.price}</h2>
                                <button className='btn btn-primary mt-5 '>Buy Now</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            )
         });
    }
  return (
    <div>
        <header></header>
        <main>
            <div className='container'>
            {displayLaptopData()}
            </div>
        </main>
    </div>
  )
}

export default ListingPage