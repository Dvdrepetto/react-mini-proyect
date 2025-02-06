import './App.css'
import { Footer } from './components/Footer'
import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Route, Routes } from "react-router-dom";
import ApartmentsList from './pages/ApartmentsList'
import apartmentsData from './Data/Apartments.json'
import Navbar from './components/Navbar'

function App() {

  const [apartmentsToDisplay, setApartments] = useState(apartmentsData);

  const deleteApartment = (id) => {
    const updatedApartments = apartmentsToDisplay.filter((apartment) => apartment.id !== id);
    setApartments(updatedApartments);
};

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<ApartmentsList apartmentArr={apartmentsToDisplay} callBackToDelete={deleteApartment}/>}/>
      <Route path="/Sidebar" element={<Sidebar/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
