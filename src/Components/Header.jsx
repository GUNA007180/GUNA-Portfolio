import React, { useState } from 'react'

function Header() {
    const [menu, setmenu] = useState(false);
    return (
        <header class='flex justify-between px-4 pt-2 bg'>
            <a className="font-bold text-gray-100" href='I'>GUNA</a>
            <nav className='hidden md:block'>
                <ul className='flex' style={{ color: "white" }}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#project'>Projects</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>

            {menu &&<nav className='block md:hidden mobile-navigation mobile-nav ul li'>
                <ul className='flex flex-col ' style={{ color: "white" }}>
                    <li><a href=''>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#project'>Projects</a></li>
                    <li><a href='#contact   '>Contact</a></li>
                </ul>
            </nav>}

            <button onClick={() => { setmenu(!menu) }} className='text-blue block md:hidden'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            </button>
        </header>
    )
}

export default Header
