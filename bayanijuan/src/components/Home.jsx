import React from 'react';
import banner1 from '../assets/banner1.jpg';

const Home = () => {
  return (
    <div className='min-h-[600px] mt-20 sm:mt-16 md:mt-20 lg:mt-3 sm:min-h-[750px] flex flex-col-reverse justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-cream text-blue'>
      <div className='w-full lg:w-2/4 space-y-4 lg:mt-0'>
        <h1 className='font-medium font-header text-7xl sm:text-5xl md:text-6xl lg:text-7xl text-center lg:text-start sm:leading-snug md:leading-normal lg:leading-[50px] break-words lg:w-[75%]'>
          Make big changes and help the world.
        </h1>
        <p className='text-xl font-body mt-5 mb-10 py-3 sm:text-1xl text-center lg:text-left'>
          Discover meaningful volunteer opportunities tailored to your interests and skills with our intuitive volunteer matching platform. Join a community dedicated to connecting passionate individuals with impactful causes worldwide.
        </p>

        <div className='flex flex-row gap-6 justify-center lg:justify-start'>
          <button className='bg-rose text-cream font-header rounded-full px-7 py-1 border-blue mt-5 hover:bg-sun duration-500 mb-5'>
            <span className='text-4xl'>Volunteer Now!</span>
          </button>
        </div>
      </div>

      <div className='relative lg:w-2/4 flex justify-center lg:justify-end'>
        <img src={banner1} alt="" className='w-full sm:w-[450px] md:w-[550px] lg:w-[650px] h-auto border-8 border-rose rounded-3xl lg:mb-0 mt-5 lg:mt-5' />
      </div>
    </div>
  );
}

export default Home;
