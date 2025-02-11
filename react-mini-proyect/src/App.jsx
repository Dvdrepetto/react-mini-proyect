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
import Details from './pages/Details'

function App() {

const [apartmentsToDisplay, setApartments] = useState(apartmentsData);
const[name, setName] = useState("");

  const deleteApartment = (id) => {
    const updatedApartments = apartmentsToDisplay.filter((apartment) => apartment.id !== id);
    setApartments(updatedApartments);
};

const newId = apartmentsToDisplay.length;
const UniqueId = newId + 1;

const handleSubmit = (event) => {
  event.preventDefault();

  const newApartment = {
      name: name,
      id: UniqueId,
  }

  const newList = [newApartment, ...apartmentsToDisplay];
  setApartments(newList);
}
  return (
    <>
      <Navbar apartmentArr={apartmentsToDisplay} />
      <section className='form'>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name='name' 
          placeholder='Apartments'
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          />
          <button>Submit</button>
        </form>
      </section>
      <Routes>
      <Route path="/" element={<ApartmentsList apartmentArr={apartmentsToDisplay} callBackToDelete={deleteApartment}/>}/>
      <Route path="/ApartmentsCard/:apartmentId" element={<ApartmentCard apartmentArr={apartmentsToDisplay}/>}/>
      <Route path="/Sidebar" element={<Sidebar/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="*" element={<Error />} />
      <Route path="/About" element={<About />} />
      <Route path="/Details" element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
