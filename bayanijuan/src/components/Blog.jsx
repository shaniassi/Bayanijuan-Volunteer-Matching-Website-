import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Branching Out: Planting Trees for a Sustainable Future',
      image: 'https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg',
      description: 'Our recent tree-planting project brought together volunteers of all ages to plant dozens of new trees in our local park. This initiative aims not only to beautify the community but also to combat climate change and provide essential habitat for wildlife, ensuring a greener future for generations to come.',
    },
    {
      id: 2,
      title: 'Fostering a Love of Learning: Reading Programs that Empower',
      image: 'https://www.volunteerforever.com/wp-content/uploads/2019/01/Cheap-Affordable-Volunteer-Programs-Header.jpg',
      description: 'Our dedicated volunteers are making a profound impact in the lives of children through one-on-one reading support programs. By fostering strong literacy skills, these initiatives empower children to explore new worlds through books, opening doors to a future filled with educational opportunities and personal growth.',
    },
    {
      id: 3,
      title: 'Building Hope: Volunteer Efforts Create Homes for Families',
      image: 'https://globuswarwick.com/wp-content/uploads/2018/10/181021-voluntourism-nepal-team.jpg?w=1920&h=768&crop=1',
      description: 'In collaboration with Habitat for Humanity, our volunteers played a crucial role in constructing a safe and secure home for a deserving family. Witnessing the power of community and compassion firsthand, these efforts provide not just shelter but also hope and stability for families in need, fostering a stronger and more resilient community.',
    },
  ];

  return (
    <div className='blog-container bg-cream min-h-screen flex flex-col items-center justify-center py-16'>
      <div className='max-w-screen-lg w-full mx-auto py-12 px-4 flex flex-col'>
        <h2 className='text-6xl text-blue mb-0 font-header font-medium text-center'>Building a Better Community: Volunteer Projects That Make a Difference</h2>
        {blogPosts.map((post) => (
          <div key={post.id} className='mt-10'>
            <h3 style={{ color: '#922C40' }} className='text-5xl mb-0 font-header font-medium'>{post.title}</h3>
            <img
              src={post.image}
              alt={post.title}
              className='w-full h-[300px] object-cover rounded-3xl border-rose border-2 shadow-md mt-5 transition duration-300 transform hover:scale-105 hover:opacity-90 cursor-pointer'
            />
            <p className='text-xl font-body my-3 sm:text-1xl text-justify'>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
