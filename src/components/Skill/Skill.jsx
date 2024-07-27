import React from 'react'
import './Skill.css'

import python from "../../assets/images/python.svg"
import dj from "../../assets/images/dj.svg"
import php from "../../assets/images/php.svg"
import pandas from "../../assets/images/pandas.svg"
import numpy from "../../assets/images/numpy.png"
import sqlite from "../../assets/images/sqlite.png"
import sea from "../../assets/images/seaborn.svg"
import matplot from "../../assets/images/matplotlib.png"
import ml from "../../assets/images/ml.png"
import ai from "../../assets/images/AI.png"
import sql from "../../assets/images/mysql.svg"
import html from "../../assets/images/html.svg"
import js from "../../assets/images/js.webp"
import react from "../../assets/images/react.svg"
import nextjs from "../../assets/images/nextjs.svg"
import css from "../../assets/images/css.svg"
import tailwind from "../../assets/images/tailwind.svg"
import c from "../../assets/images/c.svg"
import c2 from "../../assets/images/c++.svg"


const Skill = () => {
  return (
    <section className="skills">
      <div className="main-text">
        <h1 className="sub-title heading">My 
        <span className='text-yellow-400'> Skills</span></h1>
      </div>

      <div className="skill-main">
        <div className="skills-box">
          
          <div className="skills-content">
            <h3>Back-End</h3>

            <div className="content">

              <div className="content-item">
                <div className="img">
                  <span><img src={python} className="skill-icon" alt="Python" />Python</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={dj} className="skill-icon" alt="Django" />Django</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={sqlite} className="skill-icon" alt="DBSQlite" />DB SQlite</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={ml} className="skill-icon" alt="ML" />M L</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={ai} className="skill-icon" alt="AI" />A I</span>
                </div>
              </div>
              

              <div className="content-item">
                <div className="img">
                  <span><img src={pandas} className='skill-icon' alt="pandas" />Pandas</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={sea} className='skill-icon' alt="seaborn" />Seaborn</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={numpy} className='skill-icon' alt="Numpy" />Numpy</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={matplot} className='skill-icon' alt="Matplot" />Matplot</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={sql} className='skill-icon' alt="SQL" />SQL</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={html} className='skill-icon' alt="HTML" />HTML</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={react} className='skill-icon' alt="React" />React</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={js} className='skill-icon' alt="JS" />JS</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={nextjs} className='skill-icon' alt="Next JS" />Next JS</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={css} className='skill-icon' alt="CSS" />CSS</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={tailwind} className='skill-icon' alt="Tailwind CSS" />Tailwind</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={php} className='skill-icon' alt="PHP" />PHP</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={c} className='skill-icon' alt="c" />C</span>
                </div>
              </div>

              <div className="content-item">
                <div className="img">
                  <span><img src={c2} className='skill-icon' alt="C++" />C++</span>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
