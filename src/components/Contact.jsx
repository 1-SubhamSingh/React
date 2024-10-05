import React from 'react'
import {CONTACT} from "../constants"
const Contact = () => {
  return (
    <div className='pb=20'>
    <h2 className='mt-10 mb-8 text-center text-4xl'>Get in Touch</h2>   
    <div className='text-center tracking-tighter mb-12'>
    <p className='my-4'> {CONTACT.address}</p>
    <p className='my-4'> {CONTACT.phoneNo}</p>
    <a href='#' className='border-b'> {CONTACT.email}</a>
    </div>
     </div>
  )
}

export default Contact
