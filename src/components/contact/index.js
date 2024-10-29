import React from 'react'
import PageHeadercomponent from '../pageHeaderComntent'
import {BsInfoCircleFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contactme' className='contactme'>
       <PageHeadercomponent 
          headerText = 'Contact Me'
           icon ={<BsInfoCircleFill size={40}/>}
       />
    </section>
  )
}

export default Contact