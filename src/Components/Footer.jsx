import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1200px] sm:h-[150px] mx-auto px-4'>
      <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
        <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <span className='primary-color text-lg font-semibold '>   <a href='/#'>Mohamed Oueslati
    </a> 
</span>
        </div>

        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 sm:mt-0 mt-4">
          <li>
            <a href="#about" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#work" className="hover:underline me-4 md:me-6">Work</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024 <a href="/" className="hover:underline">Portfolio</a>. All Rights Reserved.
      </span>
    </div>
  )
}

export default Footer
