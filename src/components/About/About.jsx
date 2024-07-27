import { ArrowDownwardOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

const About = () => {
  const [isExpanded,setIsExpanded]=useState(false);

  const toggleContent=()=>{
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
      <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 w-[80%] mx-auto gap-[2rem] items-center'>
        <div>
          <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb:[1rem]'>ABOUT ME</h1>
          <h2 className='text-[27px] md:text-[35px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[2rem] font-bold text-white'>Transforming
          <span className='text-yellow-400'> vissions</span></h2>

          <div className='mb-[3rem] flex items-center md:space-x-5'>
            <span className='w-[50px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span>

            <p className="text-[19px] text-slate-300 w-[90%]">
              As a Frontend Developer, I flourish on creating visually appealing and user-friendly web interfaces. My proficiency in HTML, CSS, and JavaScript, along with modern frameworks, empowers me to build responsive and dynamic websites. I have a strong foundation in Python, which I leverage for various projects, including Machine Learning and Data Science.
              {!isExpanded && '....'}
              {isExpanded &&(
                <>
                <br />
               I am fascinated by the potential of machine learning to solve real-world problems and am continually expanding my knowledge in this domain. My coursework and projects have given me practical experience with algorithms, data processing, and predictive modeling.
              </>
              )}

            </p>
          </div>

          <button className='px-[1rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[16px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 rounded justify-center' onClick={toggleContent}>
            <p className='m-0'>{isExpanded ? 'Show Less':'Read More'}</p>
            <ArrowDownwardOutlined className={`text-black ${isExpanded ? 'rotate-180':''}`} />
          </button>

        </div>

        <div className="mx-auto md:mx-0 mt-[2rem] lg:mt-0 relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:h-[340px] md:w-[340px] lg:w-[400px] lg:h-[400px]">
          <img src={require("../../assets/images/profile.png")} alt="pramod sharma" layout='fill' objectFit='contain' className='relative z-[11] w-[100%] h-[100%] object-contain' />

          <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
        </div>
      </div>
    </div>
  )
}

export default About
