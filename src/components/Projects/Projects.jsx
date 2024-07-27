import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] w-[100%]'>
      <h1 className="heading">Pro
        <span className='text-yellow-400'>Jects</span></h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[1rem] lg:gap-[3rem] md:gap-[3rem] mt-[4rem]'>
        
          <div className="parent">
            <div className="card bg1">
              <div className="content-box">
                <h1 className="card-title">Secret Message</h1>
                <p className="card-content">Python GUI application using Tkinter for secret messages. Enter a message, choose an encrypt method, and view the encrypted output. Similarly, an encrypted message to decrypt and reveal the original content.</p>
                <span className="see-more"><a href="https://github.com/PramodSharma122/Python-APP/blob/main/secretMessage.py" target='_blank' rel='noopener noreferrer'> Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></a></span>
              </div>
              <div className="date-box">
                <span className="month">May</span>
                <span className="date">14</span>
                <div className='tooltip'>August 18, 2023</div>
              </div>
            </div>
          </div>

          <div className="parent card1">
            <div className="card bg2">
              <div className="content-box">
                <h1 className="card-title">Hangman Game</h1>
                <p className="card-content">This is a classic Hangman game using HTML, CSS, and JS. The game allows players to guess a hidden word one letter at a time. Players have a limited number of incorrect guesses before the game ends.</p>
                <span className="see-more"><a href="https://pramodsharma122.github.io/HANGMAN-GAME/" target='_blank' rel='noopener noreferrer'> Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></a></span>
              </div>
              <div className="date-box">
                <span className="month">Aug</span>
                <span className="date">18</span>
                <div className='tooltip'>August 18, 2023</div>
              </div>
            </div>
          </div>

          <div className="parent card2">
            <div className="card bg3">
              <div className="content-box">
                <h1 className="card-title">College Website</h1>
                <p className="card-content">This project is an in-progress college website built. It aims to provide a modern, responsive, and user-friendly platform for students, faculty, and visitors to access essential information.</p>
                <span className="see-more"><a href="https://pramodsharma122.github.io/CCT/" target='_blank' rel='noopener noreferrer'> Visit <i class="fa-solid fa-arrow-up-right-from-square"></i></a></span>
              </div>
              <div className="date-box">
                <span className="month">Dec</span>
                <span className="date">13</span>
                <div className='tooltip'>Dec 13, 2023</div>
              </div>
            </div>
          </div>
        
      </div>
    </div>

  )
}

export default Projects
