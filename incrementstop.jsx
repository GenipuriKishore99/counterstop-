import React, { useEffect, useState } from 'react'

function App() {
    const [count,setCount]=useState(0)
    const [isvalid,setIsvalid]=useState(true)

    useEffect(()=>{
        let valid;
        if(isvalid){
             valid=setInterval(()=>{
                setCount(count=>count+1)
    
            },2000)
        }
        return()=>{
            clearInterval(valid)
        }
       

    },[isvalid])

    const stopCounter=()=>{
        setIsvalid(false)
    
    }
  return (
    <div>
        <p>Count:{count}</p>
        <button className='btn btn-danger' onClick={stopCounter}>StopCount</button>
    </div>
  )
}

export default App