import React from 'react'
import PageHeadercomponent from '../pageHeaderComntent'
import {BsInfoCircleFill} from 'react-icons/bs'
import './style.css'

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
       <PageHeadercomponent 
          headerText = 'My Portfolio'
           icon ={<BsInfoCircleFill size={40}/>}
       />
    </section>
  )
}

export default Portfolio