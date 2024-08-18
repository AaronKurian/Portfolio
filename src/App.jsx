import { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skill';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
      </div>
    
    </>
  )
}

export default App
