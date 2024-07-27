import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import './Service.css'

import React from 'react'

const Service = () => {
  return (
    <div className=' pt-[4rem] md:pt-[8rem] pb-[5rem] w-[100%]'>
      <p className='heading'>MY <span className='text-yellow-400'> Services</span></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div data-aos='fade-right'>
          <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[1.3rem] change'>
            <CodeBracketSquareIcon className='effect w-[4rem] h-[4rem] mx-auto text-[#d3fae8]'/>
            <h1 className='effect text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Frontend</h1>
            <p className="font-normal text-[15px] text-[#d3d2d2]">I craft beautiful and engrossing experiences that will contribute to taking your digital game up a notch with great web interfaces! I use the latest but proven technologies in HTML, CSS and JavaScript to create amazing designs with fluid functionality alongside high performance. Whether you require a responsive, modern website or dynamic web application with an excellent user experience (UX), I create stunning yet functional design solutions.</p>
          </div>
        </div>

        <div data-aos='zoom-in' data-aos-delay='300'>
          <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[1rem] change'>
            <RocketLaunchIcon className='effect w-[3rem] h-[3rem] mx-auto text-[#d3fae8]'/>
            <h1 className='effect text-[18px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Machine Learning</h1>
            <p className="font-normal text-[15px] text-[#d3d2d2]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio soluta possimus magni, optio debitis deleniti cumque. Ea laudantium commodi corporis obcaecati, illo doloremque aperiam, maxime tempore odit ipsa consequatur!</p>
          </div>
        </div>

        <div data-aos='fade-left' data-aos-delay='500'>
          <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[1.3rem] change'>
            <CommandLineIcon className='effect w-[4rem] h-[4rem] mx-auto text-[#d3fae8]'/>
            <h1 className='effect text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Data Analyst</h1>
            <p className="font-normal text-[15px] text-[#d3d2d2]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad distinctio soluta possimus magni, optio debitis deleniti cumque. Ea laudantium commodi corporis obcaecati, illo doloremque aperiam, maxime tempore odit ipsa consequatur!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
