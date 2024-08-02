import * as React from 'react';
import { Sun } from 'react-feather'
import '../../../app/globals.css'
import '../../utilities/customClasses.css'

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <nav className='responsive-nav margin-auto flex responsive-gap items-center bg-baby-powder'>
      <div>
        <li>Home (image soon)</li>
      </div>
      <div className='flex responsive-gap'>
        <li>Login</li>
        <li><Sun /></li>
      </div>

    </nav>
  );
}
