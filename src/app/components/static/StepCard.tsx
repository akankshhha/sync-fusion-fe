import * as React from 'react';

interface CardProps {
    // image: string;
    // className: string,
    heading: string;
    subHeading: string;
  }

export default function App ({ heading, subHeading }: CardProps) {
  return (
    <div className={`bg-white shadow-lg rounded-xl overflow-hidden w-full sm:w-80 md:w-92 lg:w-1/3 mx-auto h-64 sm:h-72 md:h-80 lg:h-96 step-content`}>
    {/* <img src={image} alt={heading} className="w-full h-48 object-cover" /> */}
    <div className="p-6">
      <h2 className="text-xl mb-2">{heading}</h2>
      <p className="text-gray-600">{subHeading}</p>
    </div>
  </div>
  );
}
