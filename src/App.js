
//import './App.css';

import { useReducer } from "react";



const reducer = (state,action)=>{
    switch (action.type) {
      case "increment":
         
         return {counter:state.counter+1,isshow:state.isshow};
      case "decrement":
         return {counter:state.counter-1,isshow:state.isshow};
      case "toggle":
         return {counter:state.counter,isshow:!state.isshow}
      default:
         return {counter:state.counter,isshow:state.isshow}
         
    }
}


function App() {
   const [state, dispatch] = useReducer(reducer, {
      counter:0,
      isshow:false
   })
   
  return (
    <div >
         <h3>Counter :</h3>
         <p>{state.counter}</p>
           <button onClick={()=>dispatch({type:"increment"})}>
              increment
           </button>
           <button onClick={()=>dispatch({type:"decrement"})}>
               decrement
           </button>
          <button onClick={()=>dispatch({type:"toggle"})}>toggle the text</button>
          {state.isshow?<p>lorem sdkkdsskkds dsksdqkkdskqsdk qskdkdserpe dqsjjdqsjds</p>:""}
    </div>
  );
}

export default App;
