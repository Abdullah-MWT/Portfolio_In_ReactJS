import { Routes, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles'
import Skills from './components/skills';
import Navbar from './components/Navbar';
import './App.css'
// import { useCallback } from "react";
// import ParticleBackground from './components/Config/particleBackground';

function App() {
 
//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
//     // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundle size
//     //await loadFull(engine);
//     await loadFull(engine);
// }, []);

// const particlesLoaded = useCallback(async container => {
//      console.log(container);
// }, []);
  
  return (
   <>

   

<Navbar/>

{/* <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={{
  background: {
    color: {
        value: "#1d1d1d",
    },
},
fpsLimit: 120,
interactivity: {
    events: {
        onClick: {
            enable: true,
            mode: "push",
        },
        onHover: {
            enable: true,
            mode: "repulse",
        },
        resize: true,
    },
    modes: {
        push: {
            quantity: 4,
        },
        repulse: {
            distance: 200,
            duration: 0.4,
        },
    },
},
particles: {
    color: {
        value: "#ffffff",
    },
    links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
    },
    move: {
        direction: "none",
        enable: true,
        outModes: {
            default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
    },
    number: {
        density: {
            enable: true,
            area: 800,
        },
        value: 80,
    },
    opacity: {
        value: 0.5,
    },
    shape: {
        type: "circle",
    },
    size: {
        value: { min: 1, max: 5 },
    },
},
detectRetina: true,
}}/> */}
   <div className='App__main-page-content'>
   <Routes>
    <Route index path='/' element={<Home/>}/>
    <Route  path='/about' element={<About/>}/>
    <Route  path='/contact' element={<Contact/>}/>
    <Route  path='/portfolio' element={<Portfolio/>}/>
    <Route  path='/resume' element={<Resume/>}/>
    <Route  path='/skills' element={<Skills/>}/>
   </Routes>
   </div>
   {/* <Routes>
    <Route index path='/' element={<Home/>}/>
    <Route  path='/about' element={<About/>}/>
    <Route  path='/contact' element={<Contact/>}/>
    <Route  path='/portfolio' element={<Portfolio/>}/>
    <Route  path='/resume' element={<Resume/>}/>
    <Route  path='/skills' element={<Skills/>}/>
   </Routes> */}
   
  
   </>
  );
}

export default App;
