import React from 'react'

function BlogItem(props) {
    const blogHeadingText='5 reason to choose static website'
    const blogText='Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration.   Al...'
  return (
    <>
    <div className='bg-white py-12 px-8 w-1/4 mx-6  my-8 shadow-2xl rounded-md xl:w-3/8 md:w-full md:mx-0 '>
       <div>
          <div className='flex flex-col w-full '>
            <img className='h-48 w-full' src={props.img}></img>
          </div>
          <div>
            <p className='text-4xl font-bold text-left p-6 md:text-2xl md:p-2'>{props.blogHeadingText}</p>
          </div>
          <div>
            <p className='text-2xl text-left md:text-sm'>{props.blogText}</p>
          </div>
       </div>
    </div>
    </>
  )
}

export default BlogItem