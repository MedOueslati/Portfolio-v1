import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id='contact'> 
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
      </div>
      <div className='max-w-[800px] mx-auto'>
        <div className='mt-6 bg-[#161616] rounded-lg'>
            <div className='p-10'>
                <form action='https://getform.io/f/bollrxea' method='POST'>
                    {/* Name Input */}
                    <div className='mb-6'>
                        <label htmlFor='name' className='block text-white text-lg mb-2'>Your Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Enter your name'
                            className='w-full px-4 py-2 rounded-lg bg-[#2C2C2C] text-white border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                        />
                    </div>

                    {/* Email Input */}
                    <div className='mb-6'>
                        <label htmlFor='email' className='block text-white text-lg mb-2'>Your Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter your email'
                            className='w-full px-4 py-2 rounded-lg bg-[#2C2C2C] text-white border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                        />
                    </div>

                    {/* Message Textarea */}
                    <div className='mb-6'>
                        <label htmlFor='message' className='block text-white text-lg mb-2'>Your Message</label>
                        <textarea
                            id='message'
                            name='message'
                            placeholder='Write your message here'
                            className='w-full px-4 py-2 rounded-lg bg-[#2C2C2C] text-white border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                            rows='5'
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type='submit'
                            className='w-full py-3 bg-gradient-to-br from-green-400 to-blue-600 text-white rounded-xl hover:bg-gradient-to-bl focus:outline-none'
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
