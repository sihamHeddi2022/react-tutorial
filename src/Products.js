import React, { useContext } from 'react'
import { AppContext } from './App'

export default function Products() {
    const  context = useContext(AppContext)
  return (
    <div>Products - {context.product} </div>
  )
}
