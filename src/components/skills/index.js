import React from 'react'
import PageHeadercomponent from '../pageHeaderComntent'
import {BsInfoCircleFill} from 'react-icons/bs'
import './style.css'

const Skills = () => {
  return (
    <section id='skills' className='skills'>
       <PageHeadercomponent 
          headerText = 'My Skills'
           icon ={<BsInfoCircleFill size={40}/>}
       />
    </section>
  )
}

export default Skills