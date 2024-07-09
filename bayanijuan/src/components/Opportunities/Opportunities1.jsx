import React from 'react';
import { BookOpenIcon, GlobeEuropeAfricaIcon, HeartIcon, UsersIcon, LanguageIcon, BugAntIcon } from "@heroicons/react/24/solid";

const Opportunities1 = () => {
  const buttons = [
    {url: '/Education', text:'Education & Literacy', icon: BookOpenIcon},
    {url: '/Environment', text:'Environmental Conservation', icon: GlobeEuropeAfricaIcon},
    {url: '/Healthcare', text:'Healthcare & Wellness', icon: HeartIcon},
    {url: '/', text:'Youth Development', icon: UsersIcon},
    {url: '/', text:'Arts & Culture', icon: LanguageIcon},
    {url: '/', text:'Animal Welfare', icon: BugAntIcon},
  ]

  return (
    <div className='flex flex-col min-h-[350px] items-center bg-sun'>
      <h1 className='font-medium font-header text-black text-5xl sm:text-5xl md:text-6xl lg:text-7xl mt-12 mb-8 text-center'>
        Find The Best Opportunities Near Your City
      </h1>

      <div className='flex flex-wrap justify-between lg:justify-between px-4 lg:px-0'>
        {buttons.map((button, index) => (
          <div key={index} className='flex flex-col items-center mb-8 lg:mb-0'>
            <a
              href={button.url}
              className='flex items-center justify-center h-20 w-20 rounded-full shadow-md bg-blue transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-110 mx-8'
              aria-label={button.text}
            >
              <button.icon className='h-7 w-7 text-cream' />
            </a>
            <a href={button.url} className='text-center mt-2 text-base font-body font-medium hover:underline max-w-[100px]'>
              {button.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities1;
