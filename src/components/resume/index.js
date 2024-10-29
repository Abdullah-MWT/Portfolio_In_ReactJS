import React from 'react'
import PageHeadercomponent from '../pageHeaderComntent'
import {BsInfoCircleFill} from 'react-icons/bs'
import './style.css'

const Resume = () => {
  return (
    <section id='resume' className='resume'>
       <PageHeadercomponent 
          headerText = 'My Resume'
           icon ={<BsInfoCircleFill size={40}/>}
       />
    </section>
  )
}

export default Resume