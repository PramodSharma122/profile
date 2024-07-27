import { GetApp } from '@mui/icons-material'
import React from 'react'
import TextEffect from '../TextEffect'
import './Home.css'




const Home = () => {
    return (
        <div className='h-[100vh] mt-[3vh] bg-cover bg-center home'>
            <div className='w-[100%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[2rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[20px] md:text-[30px] text-white font-bold'>HI, I'M
                        <span className='text-yellow-400'> PRAMOD</span>
                    </h1>
                    <TextEffect />

                    <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
                        Hey there, a BSc CSIT student from Nepal with a passion for frontend development, Python, machine learning, and data science. My skills include creating dynamic, responsive websites and developing machine learning models. I thrive on solving complex problems and I am always eager to learn and collaborate.<br/><br/> Explore my portfolio to see my projects and discover what I can bring to the tech community.</p>

                    <div className='mt-[3rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <a href='/Personal_CV.pdf' target='_blank'
                        rel='noopener noreferrer' className='no-underline px-[1rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[16px] font-bold uppercase bg-[#55e6a5] text-black flex space-x-2 rounded items-center justify-center'>
                            <p className='m-0'>Download CV</p>
                            <GetApp className='text-black'/>
                        </a>
                    </div>
                </div>

                <div className='w-[340px] h-[340px] hidden bg-[#55e6a5] relative lg:flex items-center justify-center rounded-full'>
                    <img src={require("../../assets/images/profile1.JPG")} alt='pramod' className='object-cover rounded-full' />
                </div>
            </div>

        </div>
    )
}

export default Home
