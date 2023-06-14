
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Card from './Card';
import { createContext, useState } from 'react';
//import './App.css';

export const AppContext = createContext()


function App() {

   const [product, setproduct] = useState("")
   
  return (
    <div >
      <AppContext.Provider value={{product,setproduct}}>
          <Router>
              <Link to={"/"}> home</Link> |
              <Link to={"/products"}> products</Link> |
              <Link to={"/card"}> card</Link>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/products" element={<Products/>} />
                  <Route path="/product/1" element={<Product/>} />
                  <Route path="/card" element={<Card/>} />
                </Routes>
                
          </Router>
      </AppContext.Provider>
  
    </div>
  );
}

export default App;
