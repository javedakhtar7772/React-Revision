import React, { useState } from 'react'

const StateManagemet = () => {
    let num = 10;
    const [mynum, setMynum] = useState(5)
  return (
    <div>
        <h1>StateManagement</h1>
        <hr/>
        <h1>{mynum}</h1>
        <button className='btn btn-primary'onClick={()=>{ setMynum(mynum+1);  console.log(mynum);}} >Update Number</button>
    </div>
  )
}

export default StateManagemet