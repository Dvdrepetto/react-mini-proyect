import './App.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import ApartmentsList from './components/apartmentsList'

function App() {

  return (
    <>
      <Navbar/>
      <ApartmentsList/>
      <Sidebar/>
      <Footer/>
    </>
  )
}

export default App
