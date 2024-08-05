import * as React from 'react';
import '../app/utilities/customClasses.css'
import { raleway, inter, poppins } from '../app/utilities/fonts'

export default function Home() {
  return (
    <main className={`container-basic-style responsive-width ${raleway.className} flex flex-col`}>
      <section className="text-center my-6 flex flex-col gap-2 bg-slate-200 rounded-2xl p-24 bg-gradient-to-r from-[#f9ecec] md:to-[#f1f0f4]">
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
        <div className='flex-1'>
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

      <section className='section-info'>
        <div className='flex-1  flex flex-col gap-3'>
          <h1 className='text-4xl'><span className='colon'>:</span>Shared experience</h1>
          <h2 className='text-xl'> Whether it's your favorite TV shows, movies, or personal videos, <span className='underline-txt'>Dynamite</span>  brings everyone together for a shared viewing experience like never before.</h2></div>
        <div className='flex-1'><img src="/assets/images/Fans.gif" alt="friends" className='section-img' /></div>

      </section>

      <section>
        <h1 className='text-4xl'>How does <span className='underline-txt font-extrabold'>Dynamite</span> work?</h1>
      </section>

    </main>
  );
}
