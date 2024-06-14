import React from 'react';

const Stats = () => {
    const boxes = [
        { title: 'Box 1', description: 'Short description for Box 1.' },
        { title: 'Box 2', description: 'Short description for Box 2.' },
        { title: 'Box 3', description: 'Short description for Box 3.' },
        { title: 'Box 4', description: 'Short description for Box 4.' },
      ];
      
  return (
    <div className='min-h-[500px] sm:min-h-[700px] flex flex-col lg:flex-row lg:justify-between items-center bg-cream px-5 lg:px-32 py-12 sm:py-20'>
      <div className='lg:w-3/5 flex flex-col justify-center'>
        <h1 className='font-medium font-header text-5xl lg:text-7xl text-center lg:text-left mb-5'>
          BayaniJuan seamlessly connects passionate volunteers with meaningful opportunities.
        </h1>
        <p className='text-lg lg:text-xl font-body py-2 text-center lg:text-left mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className='lg:w-3/5 lg:pl-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
        {boxes.map((box, index) => (
            <div key={index} className='bg-white py-20 px-2 rounded-lg shadow-md'>
              <h2 className='text-xl lg:text-2xl font-medium mb-2 text-center lg:text-left'>{box.title}</h2>
              <p className='text-sm text-center lg:text-left'>{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
