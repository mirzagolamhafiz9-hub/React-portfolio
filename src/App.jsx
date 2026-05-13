
import './App.css'


import Navber from './components/Navber.jsx'
import About from './components/About.jsx'
import Profile from './components/Profile.jsx'
import Skill from './components/Skill.jsx'
import Projects from './components/Project.jsx'
import Services from './components/Service.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className='bg-gray-600 text-white space-y-20'>
      <Navber />
      <About />
      <Profile />
      <Skill />
      <Projects />
      <Services />
      <Contact />
      <Footer />

      
      
    </div>
  )
}

export default App
