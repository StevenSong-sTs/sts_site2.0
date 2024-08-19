'use client'

import Typewriter from 'typewriter-effect';
import "./globals.css";
import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Home() {
  const [showArrow, setShowArrow] = useState(false);
  
  const EnableArrow = () => {
    setShowArrow(true);
  }

  return (
    <>
      <div className="relative flex flex-col items-center h-screen justify-between">
        <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover">
            <source src="/background_light.mp4" type="video/mp4" />
                Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative flex flex-col items-center text-center mt-14">
          <div className="card-wrapper h-[240px] w-[240px] sm:h-[300px] sm:w-[300px] hover:scale-110 transition duration-300 ease-in-out">
            <div className="card-content flex items-center justify-center overflow-hidden">
              <img src='/profile_photo.jpg' alt="Displayed Photo" className="w-full"/>
            </div>
          </div>
          <p className="text-5xl md:text-6xl mt-8 hover:scale-110 transition duration-300 ease-in-out">Hi There!</p>
          <p className="text-5xl md:text-6xl mt-8 hover:scale-110 transition duration-300 ease-in-out">This is Steven Song</p>
          <div className="text-5xl md:text-6xl mt-8 hover:scale-110 transition duration-300 ease-in-out">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('I grow up in Hohhot, China')
                  .pauseFor(2000)
                  .changeDeleteSpeed(1)
                  .deleteChars(24)
                  .typeString('am living in Vancouver, Canada')
                  .pauseFor(2000)
                  .deleteChars(30)
                  .typeString('write code')
                  .pauseFor(2000)
                  .deleteChars(10)
                  .typeString('solve problems')
                  .pauseFor(2000)
                  .deleteChars(14)
                  .typeString('write code to solve problems!')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('The world is amazing')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Let's make it even better")
                  .pauseFor(2000)
                  .deleteChars(19)
                  .typeString("connect!")
                  .pauseFor(500)
                  .callFunction(()=>{EnableArrow();})
                  .start();
              }}
            />  
          </div>
        </div>
        <div className="flex flex-col relative mt-4 items-center">
          <img src='/arrow_animation.gif' alt="Displayed Photo" className="w-[100px]" hidden={!showArrow}/>
          <a href="/StevenSong_Resume.pdf" download>
            <button className="text-3xl border-4 rounded-full p-4 border-black hover:border-blue-500 hover:scale-110 hover:text-blue-500 transition duration-300 ease-in-out" hidden={!showArrow}>Download Resume</button>
          </a>
        </div>
        <div className="relative mb-8">
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/steven-song/" target="_blank" rel="noreferrer noopener" className="hover:scale-110 transition duration-300 ease-in-out"><LinkedInIcon style={{ fontSize: 35 }} /></a>
            <a href="https://github.com/StevenSong-sTs" target="_blank" rel="noreferrer noopener" className="hover:scale-110 transition duration-300 ease-in-out"><GitHubIcon style={{ fontSize: 35 }} /></a>
            <a href="https://www.instagram.com/songsteven1204/" target="_blank" rel="noreferrer noopener" className="hover:scale-110 transition duration-300 ease-in-out"><InstagramIcon style={{ fontSize: 35 }} /></a>
            <a href="https://www.facebook.com/song.steven.961/" target="_blank" rel="noreferrer noopener" className="hover:scale-110 transition duration-300 ease-in-out"><FacebookIcon style={{ fontSize: 35 }}/></a>
          </div>
        </div>
      </div>
    </>
  );
}
