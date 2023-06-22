import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const About =()=>{
    return(<div className='bg-blue-800' id='About'>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto "
        alt="hero"
        src={require("../../../public/my data/my pic.jpg")}
        height={300}
        width={300}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 hover:bg-green-500 cursor-pointer">
        About Me
      </h1>
      <p className="mb-8 leading-relaxed text-yellow-500">
        My Name is Ahmer Ali . I read in 2nd year in ICS group from government Colleg. I am also read 
        Web Devloping From PIAIC Lahore Branch. Our Batch is 43. My Hooby is 
        Web desinging and Web Developing. I also play cricket sometime When i free.

      </p>
      <div className="flex justify-center">
      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg ">
          <Link href={"#Contact"}>
          Contact Me...
          </Link>
        </button>
      </div>
    </div>
  </div>
</section>

    </div>)
}
export default About;