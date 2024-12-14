import React from 'react'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'> Work</p>
        <p className='text-gray-400'>Check out some of my recent work</p>
        <br />

        {/* Web Application 'Tv Movies' */}
        <div className="my-8">
          <h3 className="text-2xl font-bold text-gray-200">Web Application ‘Tv Movies’</h3>
          <p className="text-gray-400">
            This project is a movie management application developed in React, allowing users to search, filter, and add movies to a personalized list.
          </p>

          <h4 className="text-xl font-semibold text-gray-300 mt-4">Main Features:</h4>
          <ul className="list-disc pl-6 text-gray-400">
            <li><strong>Movie Search:</strong> Users can search for movies by title using a dedicated input field.</li>
            <li><strong>Filtering by Rating:</strong> A star rating component allows users to filter movies based on their rating.</li>
            <li><strong>Adding Movies:</strong> A modal form allows users to add new movies to the list with details such as title, release year, genre, rating, and poster URL.</li>
            <li><strong>Movie Display:</strong> Movies are displayed as cards with their poster, title, release year, and rating.</li>
          </ul>

          <h4 className="text-xl font-semibold text-gray-300 mt-4">Technologies Used:</h4>
          <ul className="list-disc pl-6 text-gray-400">
            <li>React for developing interactive components.</li>
            <li>Bootstrap for layout and styling of the application.</li>
            <li>react-star-rating-component for the star rating component.</li>
          </ul>
        </div>

        {/* E-Commerce Site */}
        <div className="my-8">
          <h3 className="text-2xl font-bold text-gray-200">E-Commerce Site</h3>
          <p className="text-gray-400">
            This project is a complete e-commerce site, offering an integrated solution for managing products and users with CRUD (Create, Read, Update, Delete) functionality, as well as an authentication system for users. The site includes both a dynamic front-end and a robust back-end to ensure a smooth and secure user experience.
          </p>

          <h4 className="text-xl font-semibold text-gray-300 mt-4">Main Features:</h4>
          <ul className="list-disc pl-6 text-gray-400">
            <li><strong>Product Management:</strong> Administrators can add, modify, delete, and view products on the site. Each product includes details such as name, description, price, and image.</li>
            <li><strong>User Management:</strong> Users can sign up and log in to access personalized features. Administrators have the ability to manage user accounts, including deleting or updating information.</li>
            <li><strong>Authentication:</strong> A secure login and sign-up system allows users to create an account and log in to make purchases, manage their personal information, and track their orders.</li>
            <li><strong>User Interface:</strong> The front-end is designed with a modern and responsive user interface for smooth navigation. Users can browse products, filter and search, and add items to their cart.</li>
            <li><strong>Back-End:</strong> The back-end manages all CRUD operations, user authentication, and session management. It also ensures data security and manages transactions.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Work
