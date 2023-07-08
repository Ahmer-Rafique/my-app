"use client"
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrFormClose } from "react-icons/gr"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpened, setOpened] = useState(false);


  return (
    <div className='bg-blue-500 z-50 sticky top-0'>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          <nav className="hidden md:flex md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center bg-blue-500 ">
            <Link href={"/"} className="mr-5 hover:text-gray-900 hover:bg-gray-400 cursor-pointer mx-5 py-3 font-bold ">Home</Link>
            <Link href={"#Skills"} className="mr-5 hover:text-gray-900 hover:bg-red-500 cursor-pointer mx-5 py-3 font-bold  ">Skills</Link>
            <Link href={"#Project"} className="mr-5 hover:text-gray-900 hover:bg-green-500 cursor-pointer mx-5 py-3 font-bold ">Projects</Link>
            <Link href={"#About"} className="mr-5 hover:text-gray-900 hover:bg-yellow-500 cursor-pointer mx-5 py-3 font-bold ">About</Link>
            <Link href={"#Contact"} className="mr-5 hover:text-gray-900 hover:bg-pink-500 cursor-pointer mx-5 py-3  font-bold ">Contact</Link>
          </nav>
          <div onClick={() => setOpened(!isOpened)} className='md:hidden'>
            {isOpened ?
              <GrFormClose size={25} /> :
              <GiHamburgerMenu />
            }
          </div>
          {isOpened && <MobileNavb />}
        </div>
      </header>
    </div>
  )
}
export default Navbar;


function MobileNavb() {
  return (
    <div className='flex flex-col w-full'>
      {navItemArray.map((item: navItemsType, index: number) => (
        <Link href={item.href} className="w-full rounded-md hover:text-gray-900 hover:bg-gray-400 hover:bg-gray-300 cursor-pointer py-4 px-6 font-bold ">{item.label}</Link>
      ))}
    </div>
  )
}



interface navItemsType {
  label: string,
  href: string,
}


const navItemArray: Array<navItemsType> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Skills",
    href: "#Skills",
  },
  {
    label: "Projects",
    href: "#Projects",
  },
  {
    label: "About",
    href: "#About",
  },
  {
    label: "Contact",
    href: "#Contact",
  },
]