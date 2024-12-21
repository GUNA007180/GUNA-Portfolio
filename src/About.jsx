import React from 'react'
import dev from './picture/developer.jpg'
import deg from './picture/degree.png'
import react from './picture/react.png'


function About() {
  return (
    <section id='about'>
        <div className='bg-about h-3/6'>
      <section >
        <h1 className='text-2xl  text-green-300 pl-20 font-bold'>About Me</h1>
      </section>
      <div className='flex '>
        <div >
          <h1 className='m-10 div p text-xl text-center w-4/5 font-you text-white'>
            <p className='pl-20'> Hi Everyone,</p>
            <p><img src={deg} className='h-8 ' />I have completed My Undergraduate degree in <span className=' text-rose-600'>Computer Technology </span> at EASC,ERODE.</p>
            <p><img src={react} className='h-8 animate-spin' />I am proficient in <span className=' text-rose-600'>React.js</span>,showcasing a strong foundation in the technical skill.</p>
          </h1> 

        </div>
        <div className=' items-center h-1 w-72 '>
          <img src={dev} className='m-10 border-double border-2 border-indigo-600' />
         
        </div>
      </div>
      <div className='flex justify-center pb-5 '>
      <a href="https://drive.google.com/file/d/178nPOnQyWW5ZxhuGyEjnzKfoN8w1K0LP/view?usp=sharing ">
      <button class=" bg-orange-600 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-full ">RESUME</button>
      </a>
       
      
      </div>
     
      </div>
     
    </section>
  
  )
}

export default About