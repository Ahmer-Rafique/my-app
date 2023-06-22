"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';
const Hero=()=>{
    return(<div  className='bg-blue-400'>
          <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-3 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hi..
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['I am Ahmer Ali.', 'I am Web Devloper. '],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed text-black">
         I am web devolper 3.0. I am learning web devloping from PIAIC.
         I am also learn ICS in college. My hobby is Web Developing.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
         <Link href={"#About"}>
         More About Me
         </Link>
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="hero"
        height={500}
        width={500}
        src={require("../../../public/my data/my pic.jpg")}
        
      />
    </div>
  </div>
</section>

    </div>)
}
export default Hero;