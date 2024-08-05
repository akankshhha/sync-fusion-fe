import * as React from 'react';
import '../app/utilities/customClasses.css'
import { raleway } from '../app/utilities/fonts'

export default function Home() {
  return (
    <main className={`container-basic-style responsive-width ${raleway.className} text-[#20002c]`}>
      <header className="text-center my-6 ">
      <span  className='flex justify-center'><img src="/assets/images/popcorn-stall.png" 
              alt="popcorn-stall" /></span> 
        <h1 className="text-6xl font-bold"><span className='animate-ping text-red-700 fw-bold my-1' >:</span>Dynamite</h1>
        <p className="text-xl my-1">Experience the Fun of Streaming with Friends! </p> 
      <section>
        <div><h2 className='text-xl'>Dynamite lets you and your friends stream any video together, as long as one of you has a downloaded version. Experience synchronized video playback and enjoy group chat, making every movie night a blast. Whether it's your favorite TV shows, movies, or personal videos, Dynamite brings everyone together for a shared viewing experience like never before.</h2></div>
        <div><img src="/assets/images/friends.png" alt="friends" /></div>
      </section>
      </header>
    </main>
  );
}
