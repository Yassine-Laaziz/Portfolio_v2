import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Hero, Navbar, Tech, Contracts, Projects, StarsCanvas, Achievements, SoftSkills } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-opacity-20 bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Contracts />
        <Projects />
        <SoftSkills />
        <Achievements />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
