import React, { useState } from 'react'

const StateManagemet = () => {
    let num = 10;
    const [mynum, setMynum] = useState(5)
    const[size, setSize ]=useState(200);
    const [imgPath , setImgPath]=useState('https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/Groot_1660247943.webp')
    
    return (
    <div className='container py-5' >
        <h1>StateManagement</h1>
        <hr/>
        <h1>{mynum}</h1>
        <button className='btn btn-primary'onClick={()=>{ setMynum(mynum+1); console.log(mynum);}}
          >Update Number</button>
          
        <button className='btn btn-danger'onClick={()=>{ setMynum(mynum-1);  console.log(mynum);}}
          >Update Number</button>

          {imgPath}

          <img src= {imgPath}alt=' ' width={size}/>
          <button className='btn btn-primary' onClick={()=>{setSize +50}}>+</button>
          <button className='btn btn-primary' onClick={()=>{setSize -50}}>-</button>
          <input className='from-control'onChange ={e=>setImgPath(e.target.value)}  />
    </div>
  )
}

export default StateManagemet