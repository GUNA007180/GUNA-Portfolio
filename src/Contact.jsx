import React from 'react'
import con from './picture/contact.png'
import gmail from './picture/email.png'

function Contact() {
    return (
       <section id='contact'>
         <div class='h-3/6' style={{background:"radial-gradient(circle,rgba(73,22,94,1)25%,rgba(0,0,0,1)100%)",backgroundSize: "cover"}} >
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
