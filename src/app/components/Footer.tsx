import Link from 'next/link';
import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { BsFillTelephoneFill} from 'react-icons/bs';
const Footer=()=>{
return (<div>
<footer className="text-gray-600 body-font bg-blue-300">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    </a>
    <p className="text-sm text-blue-950 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      @ 2023 Ahmer Ali all copy right reserved:
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank'
      href={"mailto:ahmerali1771@gmail.com"} className="text-gray-500 ">
    <IoIosMail className='text-5xl hover:text-blue-500'/>
      </Link>
      <Link href={"tel:+923204896766"} className="ml-3 text-gray-500">
        <BsFillTelephoneFill className='text-4xl hover:text-yellow-400'/>
      </Link>
    </span>
  </div>
</footer>

</div>)
}
export default Footer;