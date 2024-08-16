"use client"

import * as React from 'react';
import '../app/utilities/customClasses.css'
import { raleway } from '../app/utilities/fonts'
import { useState } from 'react';
import StepCard from './components/static/StepCard';

export default function Home() {

  const [activeStep, setActiveStep] = useState(1);

  return (
    <main className={`container-basic-style ${raleway.className} scroll-smooth`}>
      <section className="text-center my-6 flex flex-col gap-2 bg-slate-200 rounded-2xl mx-auto p-24 bg-gradient-to-r from-[#f9ecec] md:to-[#f1f0f4] mt-48 hero-section">
        <span className='flex justify-center '>
          <img src="/assets/images/popcorn-stall.png"
            alt="popcorn-stall" />
        </span>
        <h1 className="text-8xl font-bold">
          <span className='animate-ping colon my-1' >:</span>
          Dynamite
        </h1>
        <p className="text-3xl my-1">Experience the Fun of Streaming with Friends! </p>
        <h4 className='text-xl'>
          <span className='unl'>Dynamite </span>
          lets you and your friends stream any video together, as long as one of you has a downloaded version.
        </h4>
      </section>

      <section className='section-info mt-12 px-10 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src="/assets/images/Fans.gif" alt="friends" className='section-img' />
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-3 p-4 text-left'>
          <small className="text-sm text-gray-500">Bringing Friends Closer Through Shared Media</small>
          <h1 className='text-4xl font-extrabold'>Shared Experience</h1>
          <p className='text-lg'>Whether it's your favorite TV shows, movies, or personal videos, <span className='unl'>Dynamite</span> brings everyone together for a shared viewing experience like never before. Enjoy real-time reactions and more!</p>
        </div>
      </section>

      <section className='section-info mt-10 px-10 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 flex flex-col gap-3 p-4 text-right'>
          <small className="text-sm text-gray-500">Sync Up and Enjoy Seamless Viewing Together</small>
          <h1 className='text-4xl font-extrabold'>Synchronized Playback</h1>
          <p className='text-lg'>Experience synchronized video playback and enjoy group chat, making every movie night a <span className='unl'>blast.</span> Watch every moment unfold together with seamless streaming.</p>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src="/assets/images/connect.gif" alt="friends" className='section-img' />
        </div>
      </section>


      <section className='bg-[#F5F5F5] p-24 w-full scroll-smooth' id='guideSection'>
        <h1 className='text-4xl text-center'>How does <span className='unl font-extrabold'>Dynamite</span> work?</h1>
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
            image1='/assets/images/joinIn.gif'
            image2='/assets/images/panda.png'
            heading='Get Started on Dynamite'
            subHeading='Create an account or log in to access all the features of Dynamite. Enjoy seamless streaming and sharing experiences.'
          />
        </div>
        <div className={` ${activeStep === 2 ? '' : 'hidden'}`}>
          <StepCard
            image1='/assets/images/manage.gif'
            image2='/assets/images/customize.png'
            heading='Manage Your Collection'
            subHeading='Upload your favorite videos to your profile. View and organize them easily, ready to stream anytime.'
          />

        </div>
        <div className={` ${activeStep === 3 ? '' : 'hidden'}`}>
          <StepCard
            image1='/assets/images/joinIn.gif'
            image2='/assets/images/invite.png'
            heading='Invite Your Friends'
            subHeading='Generate a unique code for your watch party and share it with your friends. They can join the fun with just a click.'
          />
        </div>
        <div className={` ${activeStep === 4 ? '' : 'hidden'}`}
        >
          <StepCard
            image1='/assets/images/blast.gif'
            image2='/assets/images/enjoy.png'
            heading='Have a Blast'
            subHeading='Stream your videos in sync with your friends and enjoy a shared viewing experience. Chat and react in real-time for a fun-filled movie night.'
          />

        </div >
      </section>

      <section className="bg-gradient-to-r from-[#f9ecec] md:to-[#f1f0f4] w-full py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold mb-6">
          <span className="text-3xl mb-2">Stream.</span>
          <span className="text-3xl mb-2"> Connect.</span>
          <span className="text-3xl"> Celebrate.</span>
        </h1>

        <p className="mt-3 text-lg text-[#2E2E3A] font-medium">
          Ready to dive into unforgettable movie nights? Click below to start your adventure!
        </p>
        <button className="bg-gray-100 text-[#2E2E3A] font-bold py-2 px-6 rounded-md shadow-lg hover:bg-gray-200 transition-colors mt-8">
          Get Started
        </button>
      </section>

    </main>
  );
}
