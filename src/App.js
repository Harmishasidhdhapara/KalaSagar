import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import {BrowserRouter, Route, Routes} from'react-router-dom'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Placeorder from './Pages/Placeorder';
import Order from './Pages/Order';
import ShopContexProvider from './Contex/ShopContex';

function App() {
  return (
   <>
  
   <div className='px-4 sm:px-[7vw] lg:px-[9vw]'>
   <BrowserRouter>
   <ShopContexProvider>
   <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/collection' element={<Collection/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products/:productId' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/placeorder' element={<Placeorder/>}/>
            <Route path='/order' element={<Order/>}/>
        </Routes>
        </ShopContexProvider>
  </BrowserRouter>
  
   
   </div>

   
   </>
  );
}

export default App;
