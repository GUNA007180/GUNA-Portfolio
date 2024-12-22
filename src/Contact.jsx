import React from 'react'
import con from './picture/contact.png'
import gmail from './picture/email.png'

function Contact() {
    return (
       <section id='contact'>
         <div class='bg-sec h-3/6' >
            <h1 className='text-2xl  text-green-300 pl-16 font-bold' >Contact</h1>
            <div className='place-items-center'>

                <img src={con} className='h-8 bg-red-600 rounded-full ' />        
                <h3 className='text-xl text-white font-bold p-2'>+91 93_5184219</h3>
                <img src={gmail} className='h-8  bg-red-600 rounded-full' />
                <h3 className='text-xl text-white font-bold p-2'>guna51815@gmail.com</h3>
            </div>
        </div>
       </section>

    )
}

export default Contact
