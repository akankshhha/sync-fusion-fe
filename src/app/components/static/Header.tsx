import * as React from 'react';
import { Sun } from 'react-feather'
import '../../../app/globals.css'

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <nav className='p-2 text-wenge list-none flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 shadow-md m-6 rounded-md'>
        <li>Home</li>
        <li>Login</li>
        <li><Sun /></li>
    </nav>
  );
}
