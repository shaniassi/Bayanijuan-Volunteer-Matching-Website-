import React from 'react'

const Opportunities2 = () => {
    const categories = [
        { title: 'New Volunteer Opportunities', description: 'Discover the latest volunteer opportunities available right now.', link: '/new-opportunities' },
        { title: 'Upcoming Volunteer Opportunities', description: 'Check out the upcoming events you can participate in.', link: '/upcoming-events'},
        { title: 'Popular Volunteer Opportunities', description: 'Explore the most popular volunteer opportunities in your area.', link: '/popular-opportunities' }
    ]

    return (
        <div className='flex flex-col min-h-[470px] items-center bg-cream p-10'>
            <div className='flex flex-wrap justify-center gap-8'>
                {categories.map((category, index) => (
                    <div key={index} className='bg-sun shadow-lg rounded-lg p-6 w-full md:w-[300px] flex flex-col items-center text-center h-[330px] mt-5'>
                        <h2 className='font-header text-4xl mb-4 text-blue'>{category.title}</h2>
                        <p className='font-body text-lg text-gray-700 flex-grow'>{category.description}</p>
                        <a href="#" className='mt-6 bg-rose text-cream font-header text-2xl rounded-full px-10 py-1 hover:bg-opacity-80 transition duration-300 self-end'>Explore</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Opportunities2
