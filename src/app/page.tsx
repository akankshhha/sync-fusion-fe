import * as React from 'react';
import '../app/utilities/customClasses.css'
import { raleway } from '../app/utilities/fonts'

export default function Home() {
  return (
    <main className={`container-basic-style responsive-width ${raleway.className} flex flex-col`}>
      <section className="text-center my-6 flex flex-col gap-2">
        <span className='flex justify-center '><img src="/assets/images/popcorn-stall.png"
          alt="popcorn-stall" /></span>
        <h1 className="text-8xl font-bold"><span className='animate-ping text-red-700 my-1' >:</span>Dynamite</h1>
       
        <p className="text-3xl my-1">Experience the Fun of Streaming with Friends! </p>
        <h4 className='text-xl'>
        <span className='font-bold underline-txt'>Dynamite</span> lets you and your friends stream any video together, as long as one of you has a downloaded version.
        </h4>
        </section>
        <section className='flex gap-4 items-center flex-1 '>
          <div className='flex-1 text-center'><img src="/assets/images/connect.gif" alt="friends" className='section-img' /></div>
          <div className='flex-1 text-center flex flex-col gap-3'>
            <h1 className='text-4xl'><span className='font-bold text-red-700'>:</span>Synchronized video playback</h1>
            <h2 className='text-xl'> Experience synchronized video playback and enjoy group chat, making every movie night a blast. </h2>
            </div>
        </section>
        <section className='flex gap-4 items-center flex-1 '>
          <div className='flex-1 text-center'>
          <h1 className='text-4xl'><span className='font-bold text-red-700'>:</span>Shared experience</h1>
            <h2 className='text-xl'> Whether it's your favorite TV shows, movies, or personal videos, Dynamite brings everyone together for a shared viewing experience like never before.</h2></div>
          <div className='flex-1 text-center'><img src="/assets/images/connect.gif" alt="friends" className='section-img' /></div>

        </section>
        <section>

        </section>
      
    </main>
  );
}
