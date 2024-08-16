import * as React from 'react';

interface CardProps {
  image1: string;
  image2: string;
  heading: string;
  subHeading: string;
}

export default function App({ heading, subHeading, image1, image2 }: CardProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <img src={image1} alt='big-image' className="w-1/4 h-auto rounded-xl shadow-lg" />
      <div className='border-1 w-16 border-2 border-red-700'></div>
      <div className="bg-baby-powder shadow-lg rounded-xl overflow-hidden w-1/2 p-6">
        <div className="flex items-center mb-4">
          <span className="mr-4">
            <img src={image2} alt="little-img" className='w-12 h-auto' />
          </span>
          <h2 className="text-2xl">{heading}</h2>
        </div>
        <p className="text-gray-600">{subHeading}</p>
      </div>
    </div>
  );
}