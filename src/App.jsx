import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Product from './components/Product'
import './style.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Product />
      <Contact />
    </>
  )
}

export default App
