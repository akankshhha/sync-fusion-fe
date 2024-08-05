import * as React from 'react';
import { Sun } from 'react-feather'
import '../../../app/globals.css'
import '../../utilities/customClasses.css'
import { raleway, roboto_mono } from '../../utilities/fonts'
import Link from 'next/link'; 

export interface IHeaderProps {
 activePage: string;
  setActivePage: (page: string) => void;
}

export default function App({activePage, setActivePage}: IHeaderProps) {

  const handleNavigation = (route: string) => {
    setActivePage(route);
  };

  return (
    <nav className={`${raleway.className} responsive-nav margin-auto responsive-gap bg-white fixed top-0 left-0 right-0 `}>
      <div className='nav-list-item'>
        <Link 
          href={'/'}
          className={`fw-bold items-center flex text-2xl group relative`}
          >
            <img 
              src="/assets/images/dynamite-red.png" 
              alt="app-logo" 
              onClick={() => handleNavigation('/')} 
              className='fixed-image group'/>
            <span 
              className={ `${roboto_mono.className}  ${activePage !== '/' ? 'hidden' : 'transition ease-in-out '} ` }>Dynamite</span>  
        </Link>
        <Link 
          href={'/guide'} 
          onClick={() => handleNavigation('/guide')} 
          className=''>How this works</Link> 
      </div>
      <div className='nav-list-item'>
        <li><Sun /></li>
        <li className='special-button'>Join In</li>
      </div>
    </nav>
  );
}
