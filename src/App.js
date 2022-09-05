import React from 'react'
import CarerStoryForm from './components/CarerStoryForm'
import CarerSupportForm from './components/CarerSupportForm'
import GcspForm from './components/GcspForm'
import WhForm from './components/WhForm'
import WhSectionForm from './components/WhSectionForm'
import Home from './components/Home'
import NavBar from './components/NavBar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='carer_story' element={<CarerStoryForm />} />
        <Route path='carer_support' element={<CarerSupportForm />} />
        <Route path='wh' element={<WhForm />} />
        <Route path='wh_section' element={<WhSectionForm />} />
        <Route path='gcsp' element={<GcspForm />} />

      </Routes>
    </BrowserRouter>



  );
}


export default App;
