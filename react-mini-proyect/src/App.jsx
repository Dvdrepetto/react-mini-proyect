import './App.css'
import { Footer } from './components/Footer'
import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Route, Routes } from "react-router-dom";
import ApartmentsList from './pages/ApartmentsList'
import apartmentsData from './Data/Apartments.json'
import Navbar from './components/Navbar'
import ApartmentCard from './components/ApartmentCard';
import About from './pages/About';

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
      <Route path="/ApartmentsCard/:apartmentId" element={<ApartmentCard apartmentArr={apartmentsToDisplay}/>}/>
      <Route path="/Sidebar" element={<Sidebar/>}/>
      <Route path="/Navbar" element={<Navbar apartmentArr={apartmentsToDisplay}/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="*" element={<Error />} />
      <Route path="/About" element={<About />} />
      </Routes>
    </>
  )
}

export default App
