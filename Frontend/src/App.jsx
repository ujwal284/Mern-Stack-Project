import React from 'react';
import Home from "./home/Home"; 
import { Route, Routes} from "react-router-dom";
import Vehicless from './vehicle1/Vehicless';
import Signup from './Components/Signup';
import Contacts from './contact1/Contacts';
import Abouts from './About1/Abouts';

function App() {
  return (
    <>
      
      <div className='dark:bg-slate-900 dark-text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vehicle' element={<Vehicless/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/about' element={<Abouts/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
