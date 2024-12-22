import React from 'react'
import me from './picture/my.jpg'
import git from './picture/git.png'
import insta from './picture/instagram.png'
import Li from './picture/linked-in.png'


function Me() {
  return (
    <>
      <section class='flex flex-row-reverse  pt-20 bg-sec justify-between pb-20 h-full '>

        <div className='w-1/2  text-6xl  pl-8 p-2 '>
          <h1 className='hi font-me'>

            Hi,<br></br>I am <span className='text-white'>GUNA</span>

            <p className='text-3xl text-rose-600 '>MERN-Stack Developer</p>
            <p className='text-xl'></p>
          </h1>
        </div>
        <div class=" flex relative pl-24 ">
          <img class='rounded-full h-60 w-60 animate-pulse border-double border-2' src={me} />
          <div className='flex pt-24 pl-8  '>
            <a href='https://github.com/GUNA007180?tab=repositories'> <img class='h-6 m-3 bg-white rounded' src={git} /> </a>
            <a href='https://www.instagram.com/g_u.n.a/'> <img className='h-6 m-3  bg-white rounded-2xl' src={insta} /> </a>
            <a href='#'> <img className='h-6 m-3 bg-white rounded' src={Li} /> </a>
          </div>

        </div>
      </section>

    </>
  )
}

export default Me
