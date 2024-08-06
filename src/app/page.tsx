"use client"

import * as React from 'react';
import '../app/utilities/customClasses.css'
import { raleway } from '../app/utilities/fonts'
import { useState } from 'react';
import StepCard from './components/static/StepCard';

export default function Home() {

  const [activeStep, setActiveStep] = useState(1);

  return (
    <main className={`container-basic-style ${raleway.className} flex flex-col`}>
      <section className="text-center my-6 flex flex-col gap-2 bg-slate-200 rounded-2xl mx-auto p-24 bg-gradient-to-r from-[#f9ecec] md:to-[#f1f0f4] mt-48 hero-section">
        <span className='flex justify-center '>
          <img src="/assets/images/popcorn-stall.png"
            alt="popcorn-stall" />
        </span>
        <h1 className="text-8xl font-extrabold">
          <span className='animate-ping colon my-1' >:</span>
          Dynamite
        </h1>
        <p className="text-3xl my-1">Experience the Fun of Streaming with Friends! </p>
        <h4 className='text-xl'>
          <span className='font-extrabold underline-txt'>Dynamite </span>
          lets you and your friends stream any video together, as long as one of you has a downloaded version.
        </h4>
      </section>

      <section className='section-info mt-24'>
        <div className='flex-1 flex justify-center'>
          <img src="/assets/images/connect.gif" alt="friends" className='section-img' />
        </div>
        <div className='flex-1 flex flex-col gap-3'>
          <h1 className='text-4xl'>
            <span className='colon'>:</span>
            Synchronized video playback
          </h1>
          <h2 className='text-xl'> Experience synchronized video playback and enjoy group chat, making every movie night a <span className='underline-txt'>blast. </span> </h2>
        </div>
      </section>

      <section className='section-info mt-24'>

        <div className='flex-1 flex flex-col gap-3'>
          <h1 className='text-4xl'>
            <span className='colon'>:</span>
            Shared experience
          </h1>
          <h2 className='text-xl'>  Whether it's your favorite TV shows, movies, or personal videos, <span className='underline-txt'>Dynamite</span>  brings everyone together for a shared viewing experience like never before.</h2>
        </div>
        <div className='flex-1 flex justify-center'>
          <img src="/assets/images/Fans.gif" alt="friends" className='section-img' />
        </div>
      </section>

      <section className='bg-gradient-to-r from-[#f9ecec] md:to-[#f1f0f4] p-24 my-6 w-full'>
        <h1 className='text-4xl text-center'>How does <span className='underline-txt font-extrabold'>Dynamite</span> work?</h1>
        <div className="flex justify-center space-x-4 my-8">
          <button
            onClick={() => setActiveStep(1)}
            className={`step-btn ${activeStep === 1 ? 'active' : ''}`}
          >
            Step 1
          </button>
          <button
            onClick={() => setActiveStep(2)}
            className={`step-btn ${activeStep === 2 ? 'active' : ''}`}
          >
            Step 2
          </button>
          <button
            onClick={() => setActiveStep(3)}
            className={`step-btn ${activeStep === 3 ? 'active' : ''}`}
          >
            Step 3
          </button>
          <button
            onClick={() => setActiveStep(4)}
            className={`step-btn ${activeStep === 4 ? 'active' : ''}`}
          >
            Step 4
          </button>
        </div>
        <div className={` ${activeStep === 1 ? '' : 'hidden'}`}>
          <StepCard
            image='/assets/images/joinIn.gif'
            alt=''
            heading='Get Started on Dynamite'
            subHeading='Create an account or log in to access all the features of Dynamite. Enjoy seamless streaming and sharing experiences.'
          />
        </div>
        <div className={` ${activeStep === 2 ? '' : 'hidden'}`}>
          <StepCard
            image='/assets/images/manage.gif'
            alt=''
            heading='Manage Your Collection'
            subHeading='Upload your favorite videos to your profile. View and organize them easily, ready to stream anytime.'
          />

        </div>
        <div className={` ${activeStep === 3 ? '' : 'hidden'}`}>
          <StepCard
            image='/assets/images/invite.gif'
            alt=''
            heading='Invite Your Friends'
            subHeading='Generate a unique code for your watch party and share it with your friends. They can join the fun with just a click.'
          />
        </div>
        <div className={` ${activeStep === 4 ? '' : 'hidden'}`}
        >
          <StepCard
            image='/assets/images/blast.gif'
            alt=''
            heading='Have a Blast'
            subHeading='Stream your videos in sync with your friends and enjoy a shared viewing experience. Chat and react in real-time for a fun-filled movie night.'
          />

        </div >
      </section>
    </main>
  );
}
