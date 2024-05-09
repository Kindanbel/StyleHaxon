import './App.css'
import Arrivals from './Pages/Arrivals'
import Categories from './Pages/Categories'
import Collection from './Pages/Collection'
import Coming from './Pages/Coming'
import Hero from './Pages/Hero'
import Newsletter from './Pages/Newsletter'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Collection/>
    <Arrivals/>
    <Categories/>
    <Coming/>
    <Newsletter/>
    <Footer/>
    </>
  )
}


export default App
