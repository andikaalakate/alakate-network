import About from './components/About'
import Contact from './components/Contact'
// import Footer from './components/Footer'
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
      {/* <Footer /> */}
    </>
  )
}

export default App
