import React from 'react'
import BlogItem from './blogItems/BlogItem'
import img from '../../img/career/careerbg.jpeg'
function BlogPage() {
  const blogData=[
    {
      img:img,
      blogHeadingText:'5 reason to choose static website',
      blogText:'Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration.   Al...',

    },
    {
      img:img,
      blogHeadingText:'5 reason to choose static website',
      blogText:'Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration.   Al...',

    },
    {
      img:img,
      blogHeadingText:'5 reason to choose static website',
      blogText:'Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration.   Al...',

    },
    {
      img:img,
      blogHeadingText:'5 reason to choose static website',
      blogText:'Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration.   Al...',

    },
    {
      img:img,
      blogHeadingText:'5 reason to choose static website',
      blogText:'Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration.   Al...',

    },
    {
      img:img,
      blogHeadingText:'5 reason to choose static website',
      blogText:'Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration.   Al...',

    },
    {
      img:img,
      blogHeadingText:'5 reason to choose static website',
      blogText:'Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration.   Al...',

    },
    {
      img:img,
      blogHeadingText:'5 reason to choose static website',
      blogText:'Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration.   Al...',

    },
    {
      img:img,
      blogHeadingText:'5 reason to choose static website',
      blogText:'Website visitors spend 5.59 seconds on average viewing textual material. Businesses aiming to engage their audience and effectively convey their message should take this into consideration.   Al...',

    },
  ]
  return (
    <>
      <div className='bg-gray-50 flex flex-col' >

        <div className='pt-16 pb-4'>
            <span className='text-5xl font-bold  md:text-2xl sm:mx-8 '>Our website development blogs</span>
        </div>
        <div className='flex flex-wrap justify-around mx-12 xl:mx-0 xl:justify-evenly md:flex-col md:mx-44 sm:mx-8'>
          {
            blogData.length>0 ?blogData.map((i,index)=>{
              return(
                <BlogItem key={index} blogHeadingText={i.blogHeadingText} blogText={i.blogText} img={img}></BlogItem>
              )
            }) :<h1>data not found</h1>
          }
        
        </div>

      </div>
    </>
  )
}

export default BlogPage