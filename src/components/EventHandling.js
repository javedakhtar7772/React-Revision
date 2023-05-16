import React from 'react'

const EventHandling = () => {
  return (

    <div className='container py-5' >
      <h1>Event Handling</h1>
      <hr/>
      <button className='btn btn-primary' onClick={ () => alert ('Button was clicked') } >click Event</button>
      <h1 className='mt-5' onMouseOver={()=>{console.log('mause over');}} >Mouse Over Event</h1>
      <hr/>
      <input type="text" className='form-control' onChange={(e)=>{console.log(e.target.value);}} /><br></br>
      <input type="color" className='form-control mt-4' onChange={(e)=>{console.log(e.target.value[0]);}} />
      <input type="file" className='form-control mt-4' onChange={(e)=>{console.log(e.target.file[0]);}} />
    </div>
  )
}

export default EventHandling