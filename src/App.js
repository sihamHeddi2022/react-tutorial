import { useState } from 'react';
import { useEffect } from 'react';
//import './App.css';

function App() {
  const [name, setname] = useState("")
   useEffect(() => {
     
      console.log("mounted")
     return () => {
       console.log("unmounted");
     }
   }, [])
   useEffect(() => {
     
        console.log("name changed");
   }, [name])
   
   
  return (
    <div >
        <input type='text' onChange={(e)=>setname(e.target.value)}/>
        <p>{name}</p>
    </div>
  );
}

export default App;
