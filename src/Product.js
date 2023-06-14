import React, { useContext } from 'react'
import { AppContext } from './App'

export default function Product() {
    const {product,setproduct} = useContext(AppContext)
  return (
    <div>
        {product}
        <input value={product} onChange={(e)=>setproduct(e.target.value)}/>
    </div>
  )
}
