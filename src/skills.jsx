import React from 'react'
import li from './picture/star.png'

function Skills() {
  return (
    <section className='bg-skills pb-20' id='skills' >
        <h1 className='text-2xl  text-green-300 pl-20 font-bold'  >Skills</h1>

        <ul className='text-3xl font-you text-center p-10 m-5 flex justify-center md:' >
        <img src={li} className='li'/>
          <li class='p-2' ><span className='ul-li'>React.js</span></li>
          <br></br>
          <img src={li} className='li'/>
          <li class='p-2' ><span className='ul-li'>Node.js</span></li>
          <img src={li} className='li'/>
          <li class='p-2' ><span className='ul-li'>Express</span></li>
          <img src={li} className='li'/>
          <li class='p-2' ><span className='ul-li'>MongoDB</span></li>
        </ul>
    </section>
  )
}

export default Skills