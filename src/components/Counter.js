import {useState} from 'react'

const Counter=()=>{
    const [count,setCount]= useState(0);
  return (
    <div>
      <input type='button'value='incer' onClick={()=>{setCount(count+1)}}/>
      <p>{count}</p>
      <input type='button'value={'dec'} onClick={()=>{if(count>0){

setCount(count-1)}}}/>
    </div>
  )
}

export default Counter
