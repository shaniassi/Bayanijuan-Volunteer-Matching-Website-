import React from 'react';

const Stats = () => {
  const boxes = [
    { title: '10K', description: 'Volunteers Connected' },
    { title: '5K', description: 'Organizations Helped' },
    { title: '12K', description: 'Nonprofits' },
    { title: '20K', description: 'Monthly Visitors' },
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
            <div key={index} className='bg-sun py-16 px-2 rounded-lg shadow-md flex flex-col items-center justify-center text-center'>
              <h2 className='text-xl lg:text-8xl font-extrabold mb-2 text-cream'>{box.title}</h2>
              <p className='text-2xl font-body'>{box.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
