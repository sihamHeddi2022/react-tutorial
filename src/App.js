
//import './App.css';

import { useCounter } from "./useCounter";



function App() {
   const  [counter,increment,decrement,restart]= useCounter()
   
  return (
    <div >
       <p>counter : {counter}</p>
       <button onClick={increment}>
          increment
       </button>
       <button  onClick={decrement}>
           decrement
       </button>
       <button  onClick={restart}>
          restart
       </button>
    </div>
  );
}

export default App;
