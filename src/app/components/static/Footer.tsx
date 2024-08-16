import * as React from 'react';
import '../../utilities/customClasses.css';

export interface IAppProps {}

export default function Footer(props: IAppProps) {
  return (
    <div className='responsive-footer margin-auto bg-white p-8'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold mb-2'>Dynamite</h2>
        <p className='text-gray-700 mb-4'>
          The ultimate platform for streaming and watch parties. Connect with friends, sync your video playback, and enjoy an unforgettable viewing experience.
        </p>
        <p className='text-gray-600 text-sm'>
          © {new Date().getFullYear()} Dynamite. All rights reserved.
        </p>
      </div>
    </div>
  );
}
