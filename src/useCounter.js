import { useState } from "react"

export  const useCounter=(v=0)=>{
    const [counter, setcounter] = useState(v)

    const increment=()=>{
        let c = counter+1
        setcounter(c)
    }

    const decrement = ()=>{
        let c = counter-1

        setcounter(c)
    }

    const restart=()=>{
        setcounter(0)
    }
    return [counter,increment,decrement,restart]
}