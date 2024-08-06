import * as React from 'react';

interface CardProps {
  image: string;
  alt: string,
  heading: string;
  subHeading: string;
}

export default function App({ heading, subHeading, image, alt }: CardProps) {
  return (
    <div className="flex items-center justify-center">
    <img src={image} alt={alt} className="w-1/4 h-auto rounded-xl shadow-lg" />
    <div className='border-1 w-12 border-2 border-red-700'></div>
    <div className="bg-baby-powder shadow-lg rounded-xl overflow-hidden w-1/2 p-6">
      <h2 className="text-xl mb-2">{heading}</h2>
      <p className="text-gray-600">{subHeading}</p>
    </div>
  </div>
  );
}
