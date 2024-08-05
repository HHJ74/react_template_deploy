import React from 'react'
import {testimonials} from '../../constants/data'


const Review = () => {  
    return (
    <div className='mt-20'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl tracking-tight font-customFontEn font-semibold text-center my-10'>What People are saying
        </h2>
        <div className='flex flex-wrap justify-center'>
          <div className='flex flex-wrap justify-center gap-3 '>
           {
            testimonials.map((item,idx)=>(
              <div className='sm:w-1/3 lg:w-1/4 p-8 h-fit border bg-neutral-800 border-neutral-700 rounded-lg'>

            <div key={idx} > 
              <h5 className='font-customFontKr'>{item.text}</h5>
              <div className='pt-10 flex gap-4 items-center'>
                 <img src={item.image} alt="" className='h-12 w-12 border rounded-full'/>
                 <div>
                   <p className='font-customFontEn'>{item.user}</p>
                   <span className='font-customFontEn text-neutral-400'>{item.company}</span>
                 </div>
              </div>
            </div>
              </div>
                      ))}
          </div>
        </div>
    </div>
    )
  }
  
  export default Review
  