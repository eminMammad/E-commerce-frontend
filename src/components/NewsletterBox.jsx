import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (Event) => {
        Event.preventDefault();
        // console.log(Event.type);
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>News here</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum</p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
            <input type="email" className='w-full sm:flex-1  my-2' placeholder='Enter Email Address' required/>
            <button className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
};

export default NewsletterBox