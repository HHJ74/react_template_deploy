import React from 'react'
import { features } from '../../constants/data'

const Detail = () => {
  return (<div className='flex flex-col items-center'>
     <div className='pt-10'>
       <h2 className='text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold font-customFontEn text-center'>Detail Of <span className='bg-gradient-to-r from-indigo-200 to-indigo-700 text-transparent bg-clip-text'>Features</span></h2>
     </div>
    <div className='pt-10'>
      {features.map((item,idx)=>(
       
        <div key={idx} className='p-5'>
           <div className='flex items-center gap-4'>
              <div className='flex items-center justify-center h-20 w-20 p-2 border border-neutral-700 rounded-lg'>{item.icon}</div>
              <div>
                <h4>{item.text}</h4>
                 <p>{item.description}</p>
              </div>
           </div>
         </div>
         
      ))
     }
    </div>



    </div>
  )
}

export default Detail