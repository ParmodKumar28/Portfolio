import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { Toaster } from "react-hot-toast";
import Education from './Components/Education/Education'

// Parent App Functional App Component Rendring Children
const App = () => {
  // Returning JSX
  return (
    <div>
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

// Exporting App
export default App