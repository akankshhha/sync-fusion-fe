import * as React from 'react';
import { Sun } from 'react-feather'
import '../../../app/globals.css'
import '../../utilities/customClasses.css'
import { raleway, roboto_mono } from '../../utilities/fonts'
import Link from 'next/link'; 

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <nav className={`${raleway.className} responsive-nav margin-auto responsive-gap bg-baby-powder fixed top-0 left-0 right-0 `}>
      <div className='nav-list-item'>
        <Link href={'/'}  className={'text-[#5C415D] fw-bold items-center flex text-2xl'}>
          <img src="/assets/images/dynamite-red.png" alt="app-logo" className='fixed-image'/>
          <span className={ roboto_mono.className}>Dynamite</span>  
        </Link>
        <Link href={'/guide'}>How this works</Link> 
      </div>
      <div className='nav-list-item'>
        <li><Sun /></li>
        <li className='special-button'>Join In</li>
      </div>
    </nav>
  );
}
