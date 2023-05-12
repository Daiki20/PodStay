
import './App.css';
import { BrowserRouter, Routes, Route, Link, Form } from 'react-router-dom'
import Home from './components/Home';
import Catalog from './components/Catalog';
import Info from './components/Info';
import Contacts from './components/Contacts';

import Homes1 from './components/Homes1';
import Homes2 from './components/Homes2';
import Homes3 from './components/Homes3';
import Homes4 from './components/Homes4';
import Homes5 from './components/Homes5';
import Homes6 from './components/Homes6';
import Homes7 from './components/Homes7';
import Homes8 from './components/Homes8';
import Calendar from 'react-calendar';
import './App.css';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Information from './components/Information';







function App() {

return(
   <>
   
  
   


   
   
   
   



   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/homes1' element={<Homes1 />} />
      <Route path='/info' element={<Info/>} />
      <Route path='/contacts' element={<Contacts/>} />
      <Route path='/homes2' element={<Homes2 />} />
      <Route path='/homes3' element={<Homes3 />} />
      <Route path='/homes4' element={<Homes4 />} />
      <Route path='/homes5' element={<Homes5 />} />
      <Route path='/homes6' element={<Homes6 />} />
      <Route path='/homes7' element={<Homes7 />} />
      <Route path='/homes8' element={<Homes8 />} />
      <Route path='/information' element={<Information />} />
      

    </Routes>
  </BrowserRouter> </>
      

)


  
  
  
}

export default App;
