import React from 'react'
import PageHeadercomponent from '../pageHeaderComntent'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Animate} from 'react-simple-animate'
import './style.css'
import {DiApple,DiAndroid} from 'react-icons/di'
import {FaDev,FaDatabase} from 'react-icons/fa'

const personalDetails = [
  {
    label:'Name',
    value:'Abdullah'
  },

  {
    label:'Age',
    value:'27'
  },

  {
    label:'Address',
    value:'Pakistan'
  },

  {
    label:'Email',
    value:'abdullahdeveloper2008@gmail.com'
  },

  {
    label:'Contact no',
    value:'+92 3110583909'
  },

]

const jobSummary = "Seasoned front-end developer adept in React.js and Next.js, bringing a dynamic blend of creativity and technical finesse to web projects. With a proven track record of delivering visually stunning and responsive designs, I consistently exceed client expectations. Explore my portfolio for a glimpse into my innovative approach, and let's collaborate to bring your digital vision to life. Elevate your online presence with a developer committed to staying at the forefront of industry trends."

const About = () => {
  return (
    <section id='about' className='about'>
       <PageHeadercomponent 
          headerText = 'About Me'
           icon ={<BsInfoCircleFill size={40}/>}
       />
       <div className='about__content'>
        <div className='about__content__personalWrapper'><Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateX(-900px)'
      }}
      end={{
        transform: 'translateX(0px)'
      }}>
         <h3>Front End Developer</h3>
         <p>{jobSummary}</p>
         </Animate>
         <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateX(500px)'
      }}
      end={{
        transform: 'translateX(0px)'
      }}>
         <h3 className='personalInformationHeaderText'>Personal Information</h3>
         <ul>
          {personalDetails.map((item,index)=> (
            <li key={index}>
              <span className='tittle'>{item.label}</span>
              <span className='value'>{item.value}</span>
            </li>
          ))}
         </ul>
         </Animate></div>
        <div className='about__content__servicesWrapper'>
        <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform: 'translateX(600px)'
      }}
      end={{
        transform: 'translateX(0px)'
      }}>
          <div className='about__content__serviceWrapper__innerContent'>
          <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div>
          <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div>
          <DiApple size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div>
          <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>
          </div>
        </div>
        </Animate>
        </div>
       </div>
    </section>
  )
}

export default About